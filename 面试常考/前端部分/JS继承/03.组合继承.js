/**
 * 将原型链和借用构造函数的技术组合到一块，从而发挥二者之长的一种继承模式。
 * 使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。
 * 
 * 优点：组合继承避免了原型链和借用构造函数的缺陷，融合了它们的优点，成为JavaScript 中最常用的继承模式。
 * 缺点：无论什么情况下，都会调用两次超类型构造函数：
 *          一次是在创建子类型原型的时候，
 *          另一次是在子类型构造函数内部。
 *      虽然子类型最终会包含超类型对象的全部实例属性，
 *      但我们不得不在调用子类型构造函数时重写这些属性。
 */

function SuperType(name) {
    this.colors = ['red', 'green', 'blue'];
    this.name = name;
}

SuperType.prototype.sayName = function() {
    console.log(this.name);
}

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
    console.log(this.age);
}

var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
console.log(instance1.colors); //"red,blue,green,black"
instance1.sayName(); //"Nicholas";
instance1.sayAge(); //29

var instance2 = new SubType("Greg", 27);
console.log(instance2.colors); //"red,blue,green"
instance2.sayName(); //"Greg";
instance2.sayAge(); //27