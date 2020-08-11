function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Employee(name, age, job) {
    Person.call(this, name, age);
    this.job = job;
}

Employee.prototype = Object.create(Person.prototype);

var employee = new Employee("kevin", 18, "clerk");

console.log(employee instanceof Employee);
console.log(employee instanceof Person);