/**
 * 它把所有信息都封装在了构造函数之中，通过在构造函数中初始化原型(仅在必要情况下)，
 * 又保持了同时使用构造函数和原型的优点。
 * 换句话说，可以通过检查某个应该存在的方法是否有效来决定是否需要初始化原型。
 */
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    if(typeof this.sayName !== 'function') {
        Person.prototype.sayName = function() {
            console.log(this.name)
        }
    }
}
/**
 * 使用动态原型模式不能使用对象字面量重写原型。如果在已经创建了实例的情况下重写原型，
 * 就会切断现有实例与原型之间的联系。
 */
