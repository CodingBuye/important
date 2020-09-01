class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
  
    running() {
        console.log(this.name, this.age, "running");
    }
}

class Student extends Person {
    constructor(name, age, sno, score) {
        super(name, age);
        this.sno = sno;
        this.score = score;
    }

    studying() {
        console.log(this.name, this.age, this.sno, this.score, "studing");
    }
}

const stu = new Student("wwy", 18, 110, 100);
stu.studying();