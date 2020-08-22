let obj = {
    a() {
        return () => {
            return () => {
                console.log(this)
            }
        }
    }
}
obj.a()()() // obj

let obj = {
    a() {
        console.log(this)
    },
    name: 'jack',
    showName: this.name
}
obj.a() // obj
console.log(obj.showName) // undefined

let a = obj.a;
a(); // window