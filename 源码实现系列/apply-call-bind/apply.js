Function.prototype.myApply = function(context, arr) {
	context = context || window;
    var uniqueID = Symbol();
    var result;
    context[uniqueID] = this;
    if(!arr) {
        result = context[uniqueID]();
    } else {
        result = context[uniqueID](...arr);
    }
    delete context[uniqueID];
    return result;
}

var person = {
	fullName: function(txt, we) {
		console.log(txt + we + this.firstName + " " + this.lastName);

	}
}

var person1 = {
	firstName: 'John',
	lastName: 'Doe'
}


person.fullName.myApply(person1, ["1", "2"]);
