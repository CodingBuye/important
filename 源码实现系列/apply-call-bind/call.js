const person = {
	fullName: function (txt, we) {
		console.log(txt + we + this.firstName + " " + this.lastName);

	}
};

const person1 = {
	firstName: 'John',
	lastName: 'Doe'
};

person.fullName.call(person1, "Hello, ");

Function.prototype.myCall = function(context) {
	console.log(this);    // [Function: fullName]
	console.log(context); // { firstName: 'John', lastName: 'Doe' }

	var uniqueID = Symbol();

	context = context || window;
	context[uniqueID] = this;
	var args = Array.from(arguments).slice(1);
	var result = context[uniqueID](...args);
	delete context[uniqueID];
	return result;
}
person.fullName.myCall(person1, "Hello, ", "cdacd");
