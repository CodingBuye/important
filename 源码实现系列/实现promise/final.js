const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    this._status = PENDING;
    this._value = undefined;
    this._resolveQueue = [];
    this._rejectQueue = [];

    let _resolve = value => {
      const run =() => {
        if(this._status !== PENDING) return;
        this._status = FULFILLED;
        this._value = value;

        while(this._resolveQueue.length) {
          const callback = this._resolveQueue.shift();
          callback(value);
        }
      };
      setTimeout(run);
    };

    let _reject = value => {
      const run = () => {
        if(this._status !== PENDING) return;
        this._status = REJECTED;
        this._value = value;

        while(this._rejectQueue.length) {
          const callback = this._rejectQueue.shift();
          callback(value);
        }
      };
      setTimeout(run);
    };

    executor(_resolve, _reject);
  }

  then(resolveFn, rejectFn) {
    typeof resolveFn !== 'function' ? resolveFn = value => value : null;
    typeof rejectFn !== 'function' ? rejectFn = reason => {
      throw new Error(reason instanceof Error ? reason.message : reason)
    } : null;

    return new MyPromise((resolve, reject) => {
      const fulfilledFn = (value) => {
        try {
          let x = resolveFn(value);
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        } catch (error) {
          reject(error);
        }
      };

      const rejectedFn = (value) => {
        try {
          let x = rejectFn(value);
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        } catch(error) {
          reject(error);
        }
      };

      switch(this._status) {
        case PENDING:
          this._resolveQueue.push(fulfilledFn);
          this._rejectQueue.push(rejectedFn);
          break;
        case FULFILLED:
          fulfilledFn(this._value);
          break;
        case REJECTED:
          rejectedFn(this._value);
          break;
      }
    })
  }

  /**
   * catch()方法返回一个Promise，并且处理拒绝的情况。
   * 它的行为与调用Promise.prototype.then(undefined, onRejected) 相同。
   */
  catch(rejectFn) {
    return this.then(undefined, rejectFn);
  }

  /**
   * finally()方法返回一个Promise。在promise结束时，无论结果是fulfilled或者是rejected，
   * 都会执行指定的回调函数。
   * 在finally之后，还可以继续then。并且会将值原封不动的传递给后面的then
   */
  finally(callback) {
    return this.then(
      value => MyPromise.resolve(callback()).then(()=>value),
      reason => MyPromise.resolve(callback()).then(() => {throw reason})
    )
  }

  /**
   * Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象。
   * 如果该值为promise，返回这个promise；如果这个值是thenable（即带有"then" 方法)），
   * 返回的promise会“跟随”这个thenable的对象，采用它的最终状态；
   * 否则返回的promise将以此值完成。
   * 此函数将类promise对象的多层嵌套展平。
   */
  static resolve(value) {
    if(value instanceof MyPromise) return value;
    return new MyPromise(resolve => resolve(value));
  }

  /**
   * Promise.reject()方法返回一个带有拒绝原因的Promise对象
   */
  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason));
  }

  /**
   * Promise.all(iterable)方法返回一个 Promise 实例，
   * 此实例在 iterable 参数内所有的 promise 都“完成（resolved）”或
   * 参数中不包含 promise 时回调完成（resolve）；
   * 如果参数中  promise 有一个失败（rejected），此实例回调失败（reject），
   * 失败原因的是第一个失败 promise 的结果。
   */
  static all(promiseArr) {
    let index = 0;
    let result = [];
    return new MyPromise((resolve, reject) => {
      promiseArr.forEach((p, i) => {
        MyPromise.resolve(p).then(val => {
          index++;
          result[i] = val;
          if(index === promiseArr.length) {
            resolve(result);
          }
        }, error => {
          reject(error);
        })
      })
    })
  }

  /**
   * Promise.race(iterable)方法返回一个 promise，
   * 一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。
   */
  static race(promiseArr) {
    return new MyPromise((resolve, reject) => {
      for(let p of promiseArr) {
        MyPromise.resolve(p).then(value => resolve(value), error => reject(error))
      }
    })
  }
}
