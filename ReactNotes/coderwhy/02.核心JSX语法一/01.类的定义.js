// ES6之前定义一个Person类
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.running = function() {
    console.log(`${this.name} ${this.age} running`);
}

var p = new Person("why", 18);
p.running();

// ES6中定义
class Person {
    height = 1.88
    address = "北京市"

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    running() {
        console.log(`${this.name} ${this.age} running`);
    }
}

var p = new Person("why", 18);
p.running();