function Person(name, age) {
    this.name = name;
    this.age = age;
    this.colors = ['red', 'green', 'blue'];
    this.sayName = function() {
        console.log(this.name);
    }
}

var p1 = new Person("wwy", 24);
p1.colors.push("cdcd00");
var p2 = new Person("wwx", 25);
console.log(p1.colors);
console.log(p2.colors);
console.log(p1.sayName === p2.sayName);