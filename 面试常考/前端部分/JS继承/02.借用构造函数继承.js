/**
 * 这种技术的基本思想相当简单，即 在子类型构造函数的内部调用超类型构造函数。
 * 
 * 优点：可以在子类型构造函数中向超类型构造函数传递参数。
 * 缺点：方法都在构造函数中定义，因此函数复用就无从谈起了。
 */
function SuperType(name) {
    this.colors = ['red', 'green', 'blue'];
    this.name = name;
}

function SubType() {
    SuperType.call(this, "wwy");
    this.age = 29;
}

var instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors);
console.log(instance1.name);
console.log(instance1.age)

var instance2 = new SubType();
console.log(instance2.colors);