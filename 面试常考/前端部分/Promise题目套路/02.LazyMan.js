/**
 * 实现如下调用，lazyMan('xxx').sleep(1000).eat('333').sleepFirst(2000) 
 * sleepFirst 最先执行。
 * 
 * 这题考察如何组合多个 Promise 和链式调用。
 * 可以用数组将 sleep eat 等函数暂存，同时为了能链式调用，所以每个函数需返回 Promise 对象。
 * 那么什么时候执行数组中的函数呢？
 * 根据事件循环机制，我们用 setTimeout 来执行数组中的方法，
 * 在定时器的回调函数中相关的事件已经添加到数组中了，链式执行数组中方法前，
 * 需要有一个构建一个 Promise 对象来执行 then 方法，可以通过 Promise.resolve() 返回一个 Promise 对象。
 */
function lazyMan(name) {
    this.task = [];
    this.task.push(() => {
        return new Promise(res => {
            console.log("name: " + name);
            res();
        })
    })

    let run = () => {
        let sequence = Promise.resolve();
        for(const func of this.task) {
            sequence = sequence.then(() => func());
        }
    }

    setTimeout(()=>{run()}, 0);

    this.eat = str => {
        this.task.push(() => {
            return new (res => {
                console.log("eat:" + str);
                res();
            })
        });
        return this;
    }

    this.sleep = time => {
        this.task.push(() => {
            return new Promise(res => {
                setTimeout(() => {
                    console.log("wake up after:", time);
                    res();
                }, time);
            })
        })
        return this;
    }

    this.sleepFirst = time => {
        this.task.unshift(() => {
            return new Promise(res => {
                setTimeout(()=>{
                    console.log("sleep first up after:", time);
                    res();
                }, time);
            })
        });
        return this;
    }

    return this;
}