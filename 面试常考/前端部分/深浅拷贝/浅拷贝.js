/**
 * 1.Object.assign()
 * Object.assign() 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。
 * 但是 Object.assign()进行的是浅拷贝，拷贝的是对象的属性的引用，而不是对象本身。
 */
var obj = {
  a: {
    a: 'kobe',
    b: 39
  }
}
var initialObj = Object.assign({}, obj);
initialObj.a.a = 'wade';
console.log(obj.a.a);

let obj = {
  username: 'Kobe'
}
let obj2 = Object.assign({}, obj);
obj2.username = "wade";
console.log(obj);

/**
 * 2. Array.prototype.concat()
 */
let arr = [1, 3, {username: 'Kobe'}];
let arr1 = arr.concat();
arr1[0] = 0;
arr1[2].username = "wade";
console.log(arr);

/**
 * 2. Array.prototype.slice()
 */
let arr = [1, 3, { username: ' kobe'}];
let arr3 = arr.slice();
arr3[2].username = 'wade'
console.log(arr);
