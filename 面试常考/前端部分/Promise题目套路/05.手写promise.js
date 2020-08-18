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
            const run = () => {
                if(this._status !== PENDING) return;
                this._status = FULFILLED;
                this._value = value;
                while(this._resolveQueue.length > 0) {
                    const callback = this._resolveQueue.shift();
                    callback(value);
                }
            }
            setTimeout(run);
        }

        let _reject = value => {
            const run = () => {
                if(this._status !== PENDING) return;
                this._status = REJECTED;
                this._value = value;
                while(this._rejectQueue.length > 0) {
                    const callback = this._rejectQueue.shift();
                    callback(value);
                }
            }
            setTimeout(run);
        }

        executor(_resolve, _reject);
    }

    then(resolveFn, rejectFn) {
        typeof resolveFn !== 'function' ? resolveFn = value => value : null;
        typeof rejectFn !== 'function' ? rejectFn = reason => {
            throw new Error(reason instanceof Error ? reason.message : reason)
        } : null;

        return new MyPromise((resolve, reject) => {
            const fulfilledFn = value => {
                try {
                    let x = resolveFn(value);
                    x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
                } catch(error) {
                    reject(error);
                }
            };

            const rejectedFn = value => {
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

    static all(promises) {
        let index = 0;
        let res = [];
        return new MyPromise((resolve, reject) => {
            promises.forEach((p, i) => {
                MyPromise.resolve(p).then(val => {
                    index++;
                    res[i] = val;
                    if(index === promises.length) {
                        resolve(res);
                    }
                }, error => {
                    reject(error);
                })
            })
        })
    }

    static race(promises) {
        return new MyPromise((resolve, reject) => {
            for(let p of promises) {
                MyPromise.resolve(p).then(value => resolve(value), 
                error => reject(error));
            }
        })
    }
}