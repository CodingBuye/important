var stack = function() {
	this.items = [];
}

stack.prototype.push = function(val) {
	this.items.push(val);
}

stack.prototype.pop = function() {
	if(this.items.length === 0) {
		return undefined;
	}
	let val = this.items[this.items.length-1];
	this.items.length -= 1;
	return val;
}

stack.prototype.peek = function() {
	return this.items[this.items.length-1];
}

stack.prototype.isEmpty = function() {
	return this.items.length === 0;
}

stack.prototype.size = function() {
	return this.items.length;
}

stack.prototype.clear = function() {
	this.items = [];
}

stack.prototype.print = function() {
	console.log(this.items.toString());
}