Function.prototype.myApply = function(context, arr) {
	context = context || window;
    const uniqueID = Symbol();
    let result;
    context[uniqueID] = this;
    if(!arr) {
        result = context[uniqueID]();
    } else {
        result = context[uniqueID](...arr);
    }
    delete context[uniqueID];
    return result;
}

const person = {
    fullName: function (txt, we) {
        console.log(txt + we + this.firstName + " " + this.lastName);

    }
};

const person1 = {
    firstName: 'John',
    lastName: 'Doe'
};


person.fullName.myApply(person1, ["1", "2"]);
