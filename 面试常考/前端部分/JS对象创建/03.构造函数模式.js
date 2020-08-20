function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    }
    // 函数相当于：
    // this.sayName = new Function("console.log(this.name)")
}

var person1 = new Person('wwy', '24', 'student');
var person2 = new Person('wq', '24', 'student');

// 每个方法都要在每个实例上重新创建一遍，
// `person1.sayName !== person2.sayName`,
// 它们所使用的sayName方法不是同一个Function实例

// ****************************************************************************

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName; // sayName包含的是一个指向函数的指针
}

function sayName() {
    console.log(this.name)
}

var person1 = new Person('wwy', '24', 'student');
var person2 = new Person('wq', '24', 'student');
console.log(person1.sayName === person2.sayName);// true
// person1和person2共享了在全局作用域中定义的同一个sayName()函数

/**
 * 解决了两个函数做同一件事的问题，但是新问题又来了：
 *  1. 在全局作用域中定义的函数实际上只能被某个对象调用，让全局作用域有点名不副实
 *  2. 如果对象需要定义很多方法，那么就要定义多个全局函数，这个自定义的引用类型就丝毫没有封装性可言了
    这些问题可以通过原型模式来解决。
 */