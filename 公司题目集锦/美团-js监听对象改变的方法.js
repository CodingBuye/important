// ES5
let obj = {name: 'wwy', age: 24}

Object.defineProperty(obj, "name", {
    set: function(value) {
        name = value;
        console.log('更新了');
    },
    get() {
        return name;
    }
})

obj.name = "cnj";
console.log(obj.name);


// ES6
var user = new Proxy({}, {
    set: function(target, key, value, receiver) {
        console.log("更新了");
        target[key] = value;
    },
    get(target, key, receiver) {
        return target[key];
    }
})

user.name = "cd";
console.log(user.name);