/**
 * 构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性。
 * 结果，每个实例都会有自己的一份实例属性的副本，但同时又共享着对方法的引用，
 * 最大限度地节省了内存。
 * 
 * 这种混成模式还支持向构造函数传递参数，可谓是继两种模式之长。
 * 
 * 这种构造函数与原型混成的模式，是目前在ES中使用最广泛、认同度最高的一种创建自定义类型的方法。
 * 这是一种定义引用类型的一种默认模式。
 */
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ['Shelly', 'Court'];
}

Person.prototype = {
    constructor: Person,
    sayName = function() {
        console.log(this.name);
    }
}

var person1 = new Person('wwy', '24', 'student');
var person2 = new Person('wq', '24', 'student');

person1.friends.push('Van');
person1.friends; // ['Shelly', 'Court', 'Van'];
person2.friends; // ['Shelly', 'Court']

person1.friends === person2.friends; // false;
person1.sayName === person2.sayName; // true
