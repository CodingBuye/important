/**
 * 我们已经初步完成了链式调用，但是对于 then() 方法，我们还要两个细节需要处理一下
 * 1. 值穿透：根据规范，如果 then() 接收的参数不是function，那么我们应该忽略它。
 * 如果没有忽略，当then()回调不为function时将会抛出异常，导致链式调用中断
 * 2. 处理状态为resolve/reject的情况：其实我们上边 then() 的写法是对应状态为pending的情况，
 * 但是有些时候，resolve/reject 在 then() 之前就被执行（比如Promise.resolve().then()），
 * 如果这个时候还把then()回调push进resolve/reject的执行队列里，那么回调将不会被执行，
 * 因此对于状态已经变为fulfilled或rejected的情况，我们直接执行then回调：
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