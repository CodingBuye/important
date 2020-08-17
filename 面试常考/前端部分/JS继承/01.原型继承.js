/**
 * 原型链是实现原型继承的主要方法，
 * 基本思想就是利用原型让一个引用类型继承另一个引用类型的属性和方法。
 * 
 * 原型继承的缺点(问题)
 * 1. 有引用类型的时候，各个实例对该引用的操作会影响其他实例。
 * 2. 没有办法在不影响所有对象实例的情况下，给超类型的构造函数传递参数。
 * https://mp.weixin.qq.com/s/-hUmVEO8wk4QP7CWURg4hA
 */
function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function() {
    return this.property;
}


var instance = new SubType();
console.log(instance.getSuperValue()); // true