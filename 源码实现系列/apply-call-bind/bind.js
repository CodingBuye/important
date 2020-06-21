var obj = {name:"Smiley"};
var greeting = function(str, lang){
  this.value = 'greetingValue';
  console.log("Welcome "+this.name+" to "+str+" in "+lang);
};

var objGreeting = greeting.myBind(obj, 'the world'); 

objGreeting('JS');



Function.prototype.myBind = function() {
	var thatFunc = this,  // greeting
	    thatArg = arguments[0]; // obj
	var args = Array.prototype.slice.call(arguments, 1); // 'the world'

	if(typeof thatFunc !== 'function') {
		throw new TypeError('Function.prototype.bind '+
			'- what is trying to be bound is not callable');
	}

	var fBound = function() {
		return thatFunc.apply(this instanceof fBound ? this : thatArg,
			args.concat(Array.prototype.slice.call(arguments)))
	}

	var fNOP = function(){};
	if(thatFunc.prototype) {
		fNOP.prototype = thatFunc.prototype;
	}
	fBound.prototype = new fNOP();
	return fBound;
}