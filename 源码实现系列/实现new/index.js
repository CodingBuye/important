// 1. 创建一个新对象；
// 2. 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）；
// 3. 执行构造函数中的代码（为这个新对象添加属性）；
// 4. 如果这个函数有返回值，则返回；否则，就会默认返回新对象

function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function() {
		console.log(this.name);
	}
}

// var person = new Person('Nicholas', 29, 'Front-end developer'); 
// console.log(person.name) // Nicholas
// person.sayName();        // Nicholas
// console.log(person.__proto__ === Person.prototype);   // true


function myNew() {
	var constr = Array.prototype.shift.call(arguments);
	var obj = Object.create(constr.prototype);
	var result = constr.apply(obj, arguments);
	return result instanceof Object ? result : obj;
}

var person = myNew('Nicholas', 29, 'Front-end developer');
console.log(person.name);
