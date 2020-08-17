/**
 * 原型式继承：
 * 其原理就是借助原型，可以基于已有的对象创建新对象。
 *  function object(o) {
        function F(){};
        F.prototype = o;
        return new F();
    }
    ES5新增了Object.create()方法规范化了原型式继承。即调用方法为：Object.create(o);
 */

// 寄生式继承是原型式继承的加强版本: 即在产生了这个继承了父类的对象之后，为这个对象添加一些增强方法。
function createAnother(origin) {
    var clone = object(origin);
    clone.say = function() {
        console.log("hi");
    }
    return clone;
}