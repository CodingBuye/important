/**
 * 基本思想是创建一个函数，该函数的作用仅仅是封装创建对象的代码，然后在返回新创建的对象；
 * 从表面上看，这个又很像是典型的构造函数。
 */
function Person(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    }
    return o;
}

var person = new Person('wwy', '24', 'student');
person.sayName(); // 'wwy'

/**
 * 这个模式可以在特殊的情况下来为对象创建构造函数。假设我们像创建一个具有额外方法的特殊数组。
 * 由于不能直接修改Array构造函数，因此可以使用这个模式。
 */
function SpecialArray() {
    var values = new Array();
    values.push.apply(values, arguments);
    values.toPipedString = function() {
        return this.join('|');
    }
    return values;
}

var colors = new SpecialArray('red', 'blue', 'green');
colors.toPipedString(); // 'red|blue|green'

/**
 * 首先，返回的对象与构造函数或者与构造函数的原型属性之间没有关系；
 * 也就是说，构造函数返回的对象与在构造函数外部创建的对象没有什么不同。
 * 因此不能使用instanceof操作符来确定对象类型。
 * 
 * 建议在可以使用其他模式的情况下，不要使用这种模式。
 */