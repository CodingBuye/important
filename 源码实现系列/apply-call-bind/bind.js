var obj = {name:"Smiley"};
var greeting = function(str, lang){
  this.value = 'greetingValue';
  console.log("Welcome "+this.name+" to "+str+" in "+lang);
};

var objGreeting = greeting.myBind(obj, 'the world'); 

objGreeting('JS');

Function.prototype.myBind = function() {
	console.log(this);
	console.log(arguments);
	var thatFunc = this;
	var thatArg = arguments[0];
	var args = Array.prototype.slice.call(arguments, 1);
	if(typeof thatFunc !== 'function') {
		throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
	}

	return function() {
		return thatFunc.apply(thatArg, args);
	}
}

