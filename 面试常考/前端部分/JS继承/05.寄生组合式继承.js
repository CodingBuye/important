/**
 * 实质上，寄生组合继承是寄生式继承的加强版。
 * 这也是为了避免组合继承中无可避免地要调用两次父类构造函数的最佳方案。
 * 所以，开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。
 */

// 基本模式
function inheritPrototype(SubType, SuperType) {
    var prototype = object(SuperType.prototype);
    prototype.constructor = SubType;
    SubType.prototype = prototype;
}