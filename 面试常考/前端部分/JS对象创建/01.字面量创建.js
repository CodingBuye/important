// 创建自定义对象最简单的方式即使创建一个Object的实例，然后给它添加属性和方法
var person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";

person.sayName = function() {
    console.log(this.name);
}

// 使用对象字面量语法可以写成这样
var person = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName: function(){
        console.log(this.name);
    }
}

// 上述两种方式有个明显的缺点：使用同一个接口创建很多对象，会产生大量重复代码