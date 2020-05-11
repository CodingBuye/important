/**
 * 上面我们已经简单地实现了一个超低配版Promise，但我们会看到很多文章和我们写的不一样，
 * 他们的Promise实现中还引入了各种状态控制，这是由于ES6的Promise实现需要遵循Promise/A+规范，
 * 是规范对Promise的状态控制做了要求。
 * Promise/A+的规范比较长，这里只总结两条核心规则：
 * 1. Promise本质是一个状态机，且状态只能为以下三种：Pending（等待态）、Fulfilled（执行态）、Rejected（拒绝态），状态的变更是单向的，
 * 只能从Pending -> Fulfilled 或 Pending -> Rejected，状态变更不可逆
 * 2. then方法接收两个可选参数，分别对应状态改变时触发的回调。then方法返回一个promise。
 * then 方法可以被同一个 promise 调用多次。
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
  then(resolveFn, rejectFn) {
    this._resolveQueue.push(resolveFn);
    this._rejectQueue.push(rejectFn);
  }
}