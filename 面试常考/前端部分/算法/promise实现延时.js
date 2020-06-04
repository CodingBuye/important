/**
 * 调用方式：
 * new People('wwy').sleep(3).eat('apple').sleep(5).eat('durian')
 *
 * 打印结果：
 * 'hello, whr' -(等待3s)--> 'whr eat apple' -(等待5s)--> 'whr eat durian'
 */

class People {
  constructor(name) {
    this.name = name;
    this.sayHello();
    this.query = Promise.resolve();
  }

  sayHello() {
    console.log(`Hello, ${this.name}`);
  }

  sleep(time) {
    this.query = this.query.then(()=>{
      return new Promise(res => {
        setTimeout(()=>{
          res();
        }, time*1000);
      })
    });
    return this;
  }

  eat(food) {
    this.query = this.query.then(() => {
      console.log(`${this.name} eat ${food}`);
    });
    return this;
  }
}

new People('wwy')
  .sleep(3)
  .eat('apple')
  .sleep(5)
  .eat('durian');
