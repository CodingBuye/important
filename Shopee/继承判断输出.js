function A() {
    this.name = 'a';
    this.color = ['yellow', 'blue'];
}

function B() {}

B.prototype = new A();

var b1 = new B();
var b2 = new B();

b1.name = 'bbb';
b2.color.push('black');

console.log(b1.name);  // 'bbb'
console.log(b2.name);  // 'a'
console.log(b1.color); // ['yellow', 'blue', 'black']
console.log(b2.color); // ['yellow', 'blue', 'black']