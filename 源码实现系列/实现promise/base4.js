/**
 * 完成了then的链式调用以后，我们再处理一个前边的细节，然后放出完整代码。
 * 上文我们说过，Promise的执行顺序是new Promise -> then()收集回调 -> resolve/reject执行回调，
 * 这一顺序是建立在executor是异步任务的前提上的，
 * 如果executor是一个同步任务，那么顺序就会变成new Promise -> resolve/reject执行回调 -> then()收集回调，
 * resolve的执行跑到then之前去了，为了兼容这种情况，
 * 我们给resolve/reject执行回调的操作包一个setTimeout，让它异步执行。
 * 
 * 这里插一句，有关这个setTimeout，其实还有一番学问。
 * 虽然规范没有要求回调应该被放进宏任务队列还是微任务队列，
 * 但其实Promise的默认实现是放进了微任务队列，
 * 我们的实现（包括大多数Promise手动实现和polyfill的转化）都是使用setTimeout放入了宏任务队列
 * （当然我们也可以用MutationObserver模拟微任务）
 */
//Promise/A+规范的三种状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
class MyPromise {
  // 构造方法接收一个回调
  constructor(executor) {
    this._status = PENDING;  // Promise状态
    this._value = undefined; // 存储then回调return的值
    this._resolveQueue = []; // 成功队列, resolve时触发
    this._rejectQueue = [];  // 失败队列, reject时触发

    // 由于resolve/reject是在executor内部被调用, 因此需要使用箭头函数固定this指向, 否则找不到this._resolveQueue
    let _resolve = val => {
      const run = () => {
        if(this._status !== PENDING) return; // 对应规范中的"状态只能由pending到fulfilled或rejected"
        this._status = FULFILLED; // 变更状态
        this._value = val; // 储存当前value

        // 这里之所以使用一个队列来储存回调,是为了实现规范要求的 "then 方法可以被同一个 promise 调用多次"
        // 如果使用一个变量而非队列来储存回调,那么即使多次p1.then()也只会执行一次回调
        while(this._resolveQueue.length) {
          const callback = this._resolveQueue.shift();
          callback(val);
        }
      }
      setTimeout(run);
    }

    let _reject = val => {
      const run = () => {
        if(this._status !== PENDING) return; // 对应规范中的"状态只能由pending到fulfilled或rejected"
        this._status = REJECTED;

        // 这里之所以使用一个队列来储存回调,是为了实现规范要求的 "then 方法可以被同一个 promise 调用多次"
        // 如果使用一个变量而非队列来储存回调,那么即使多次p1.then()也只会执行一次回调
        while(this._rejectQueue.length) {
          const callback = this._rejectQueue.shift();
          callback(val);
        }
      }
      setTimeout(run);
    }

    // new Promise()时立即执行executor,并传入resolve和reject
    executor(_resolve, _reject);
  }

  // then方法,接收一个成功的回调和一个失败的回调，并push进对应队列
  // then方法
  then(resolveFn, rejectFn) {
    // 根据规范，如果then的参数不是function，则我们需要忽略它, 让链式调用继续往下执行
    typeof resolveFn !== 'function' ? resolveFn = value => value : null;
    typeof rejectFn !== 'function' ? rejectFn = reason => {
      throw new Error(reason instanceof Error ? reason.message : reason)
    } : null;

    //return一个新的promise
    return new MyPromise((resolve, reject) => {
      //把resolveFn重新包装一下,再push进resolve执行队列,这是为了能够获取回调的返回值进行分类讨论
      const fulfilledFn = value => {
        try {
          //执行第一个(当前的)Promise的成功回调,并获取返回值
          let x = resolveFn(value)
          //分类讨论返回值,如果是Promise,那么等待Promise状态变更,否则直接resolve
          //这里resolve之后，就能被下一个.then()的回调获取到返回值，从而实现链式调用
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }
      //把后续then收集的依赖都push进当前Promise的成功回调队列中(_rejectQueue), 这是为了保证顺序调用
      // this._resolveQueue.push(fulfilledFn)

      //reject同理
      const rejectedFn  = error => {
        try {
          let x = rejectFn(error)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }
      // this._rejectQueue.push(rejectedFn)

      switch(this._status) {
        // 当状态为pending时,把then回调push进resolve/reject执行队列,等待执行
        case PENDING:
          this._resolveQueue.push(fulfilledFn);
          this._rejectQueue.push(rejectedFn);
          break;
        // 当状态已经变为resolve/reject时,直接执行then回调
        case FULFILLED:
          fulfilledFn(this._value); // this._value是上一个then回调return的值(见完整版代码)
          break;
        case REJECTED:
          rejectedFn(this._value);
          break;
        }
    })
  }
}

// 测试
const p1 = new MyPromise((resolve, reject) => {
  resolve(1)          //同步executor测试
})

p1
  .then(res => {
    console.log(res)
    return 2          //链式调用测试
  })
  .then()             //值穿透测试
  .then(res => {
    console.log(res)
    return new MyPromise((resolve, reject) => {
      resolve(3)      //返回Promise测试
    })
  })
  .then(res => {
    console.log(res)
    throw new Error('reject测试')   //reject测试
  })
  .then(() => {}, err => {
    console.log(err)
  })