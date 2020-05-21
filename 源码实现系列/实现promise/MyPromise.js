const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    this._status = PENDING;
    this._resolveQueue = [];
    this._rejectQueue = [];

    let _resolve = (value) => {
      const run = () => {
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

    let _reject = (value) => {
      const run = () => {
        if(this._status !== PENDING) return;
        this._status = REJECTED;
        this._value = value;
        while (this._rejectQueue.length) {
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
      const fulfilledFn = (val) => {
        try{
          let x = resolveFn(val);
          x instanceof MyPromise ? x.then(resolve,reject) : resolve(x);
        } catch(error) {
          resolve(error);
        }
      };

      const rejectedFn = (val) => {
        try{
          let x = rejectFn(val);
          x instanceof MyPromise ? x.then(resolve,reject) : resolve(x);
        } catch(error) {
          resolve(error);
        }
      };

      switch (this._status) {
        case FULFILLED:
          fulfilledFn(this._value);
          break;
        case REJECTED:
          rejectedFn(this._value);
          break;
        case PENDING:
          this._resolveQueue.push(fulfilledFn);
          this._rejectQueue.push(rejectedFn);
          break;
      }
    });
  }

  catch(rejectFn) {
    return this.then(undefined, rejectFn);
  }

  finally(callback) {
    return this.then(
      value => MyPromise.resolve(callback()).then(()=>value),
      reason => MyPromise.resolve(callback()).then(()=>{throw reason}));
  }

  static resolve(value) {
    if(value instanceof MyPromise) return value;
    return new MyPromise(resolve => resolve(value));
  }

  static reject(value) {
    return new MyPromise((resolve, reject) => reject(value));
  }

  static all(promiseArr) {
    let index = 0;
    let result = [];
    promiseArr.forEach((p, i) => {
      MyPromise.resolve(p).then(val => {
        index++;
        result[i] = val;
        if(index === promiseArr.length) {
          this.resolve(result);
        }
      }, error => {
        this.reject(error);
      })
    })
  }

  static race(promiseArr) {
    return new MyPromise((resolve, reject) => {
      for(let p of promiseArr) {
        MyPromise.resolve(p).then(val => resolve(val), error => reject(error));
      }
    })
  }
}
