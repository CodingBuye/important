/**
 * promise解决了什么问题？
 * 在传统的异步编程中，如果异步之间存在依赖关系，我们就需要通过层层嵌套回调来满足这种依赖，
 * 如果嵌套层数过多，可读性和可维护性都变得很差，产生所谓“回调地狱”，
 * 而Promise将回调嵌套改为链式调用，增加可读性和可维护性。
 */
const p1 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('result');
  }, 1000);
})

p1.then(res => console.log(res), err => console.log(err));

/**
 * promise调用流程:
 * - Promise的构造方法接收一个executor()，在new Promise()时就立刻执行这个executor回调
 * - executor()内部的异步任务被放入宏/微任务队列，等待执行
 * - then()被执行，收集成功/失败回调，放入成功/失败队列
 * - executor()的异步任务被执行，触发resolve/reject，从成功/失败队列中取出回调依次执行
 */
class MyPromise {
  // 构造方法接收一个回调
  constructor(executor) {
    this._resolveQueue = [];  // then收集的执行成功的回调队列
    this._rejectQueue = [];   // then收集的执行失败的回调队列

    // 由于resolve/reject是在executor内部被调用, 因此需要使用箭头函数固定this指向, 
    // 否则找不到this._resolveQueue
    let _resolve = val => {
      // 从成功队列里取出回调依次执行
      while(this._resolveQueue.length) {
        const callback = this._resolveQueue.shift();
        callback(val);
      }
    }

    let _reject = val => {
      // 从失败队列里取出回调依次执行
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

// 测试
const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('result');
  }, 1000);
})
p2.then(res => console.log(res));

/**
 * 我们运用观察者模式简单的实现了一下then和resolve，使我们能够在then方法的回调里取得异步操作的返回值，
 * 但我们这个Promise离最终实现还有很长的距离，下面我们来一步步补充这个Promise：
 */