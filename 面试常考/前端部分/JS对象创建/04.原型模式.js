function Person() {
}

Person.prototype.name = 'Nicholas';
Person.prototype.age = 29;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function() {
    alert(this.name);
};

var person1 = new Person();
person1.name; // 'Nicholas'

var person2 = new Person();
person2.sayName(); // 'Nocholas'
person1.sayName === person2.sayName; // true
/**
 * 1. 它省略了为构造函数传递初始化参数这一环节，结果所有实例在默认情况下都将取得相同的属性值
 * 2. 原型模式的最大问题是由其共享的本质所造成的。原型中所有属性是被很多实例共享的，这种共享对于函数非常合适，对于含有基本值的属性也说得过去，但是对于包含引用类型的值来说，问题就比较突出了。
 */