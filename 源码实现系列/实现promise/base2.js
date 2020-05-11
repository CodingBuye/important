/**
 * 补充完规范，我们接着来实现链式调用，这是Promise实现的重点和难点，我们先来看一下then是如何链式调用的：
 */
const p1 = new Promise((resolve, reject) => {
  resolve(1);
});
p1.then(res => {
  console.log(res);
  //then回调中可以return一个Promise
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(2);
    }, 1000);
  })
}).then(res => {
  console.log(res);
  return 3;
}).then(res => {
  console.log(res);
})

/**
 * 我们思考一下如何实现这种链式调用：
 * 1. 显然.then()需要返回一个Promise，这样才能找到then方法，所以我们会把then方法的返回值包装成Promise。
 * 2. .then()的回调需要拿到上一个.then()的返回值
 * 3. .then()的回调需要顺序执行，以上面这段代码为例，虽然中间return了一个Promise，但执行顺序仍要保证是1->2->3。
 * 我们要等待当前Promise状态变更后，再执行下一个then收集的回调，这就要求我们对then的返回值分类讨论
 */
//Promise/A+规范的三种状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  // 构造方法接收一个回调
  constructor(executor) {
    this._status = PENDING;  // Promise状态
    this._resolveQueue = []; // 成功队列, resolve时触发
    this._rejectQueue = [];  // 失败队列, reject时触发

    // 由于resolve/reject是在executor内部被调用, 因此需要使用箭头函数固定this指向, 否则找不到this._resolveQueue
    let _resolve = val => {
      if(this._status !== PENDING) return; // 对应规范中的"状态只能由pending到fulfilled或rejected"
      this._status = FULFILLED;

      // 这里之所以使用一个队列来储存回调,是为了实现规范要求的 "then 方法可以被同一个 promise 调用多次"
      // 如果使用一个变量而非队列来储存回调,那么即使多次p1.then()也只会执行一次回调
      while(this._resolveQueue.length) {
        const callback = this._resolveQueue.shift();
        callback(val);
      }
    }

    let _reject = val => {
      if(this._status !== PENDING) return; // 对应规范中的"状态只能由pending到fulfilled或rejected"
      this._status = REJECTED;

      // 这里之所以使用一个队列来储存回调,是为了实现规范要求的 "then 方法可以被同一个 promise 调用多次"
      // 如果使用一个变量而非队列来储存回调,那么即使多次p1.then()也只会执行一次回调
      while(this._rejectQueue.length) {
        const callback = this._rejectQueue.shift();
        callback(val);
      }
    }

    // new Promise()时立即执行executor,并传入resolve和reject
    executor(_resolve, _reject);
  }

  // then方法,接收一个成功的回调和一个失败的回调，并push进对应队列
  // then方法
  then(resolveFn, rejectFn) {
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
      this._resolveQueue.push(fulfilledFn)

      //reject同理
      const rejectedFn  = error => {
        try {
          let x = rejectFn(error)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }
      this._rejectQueue.push(rejectedFn)
    })
  }
}
// 测试
const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 500);
})

p2
  .then(res => {
    console.log(res)
    return 2
  })
  .then(res => {
    console.log(res)
    return 3
  })
  .then(res => {
    console.log(res)
  })

