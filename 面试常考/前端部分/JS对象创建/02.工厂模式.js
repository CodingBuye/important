/**
 * 这种模式抽象了创建具体对象的过程，用函数来封装以特定接口创建对象的细节。
 */
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    }
    return o;
}

var person1 = createPerson('wwy', '24', 'student');
var person2 = createPerson('wq', '24', 'student');

/**
 * 工厂函数解决了创建多个相似对象的问题，但是没有解决对象的识别问题(即怎样知道一个对象的类型)。
 */