/**
 * 1.JSON.parse(JSON.stringify())
 * 用JSON.stringify将对象转成JSON字符串，再用JSON.parse()把字符串解析成对象，
 * 一去一来，新的对象产生了，而且对象会开辟新的栈，实现深拷贝
 */
let arr = [1, 3, {username: 'kobe'}];
let arr4 = JSON.parse(JSON.stringify(arr));
arr4[2].username = 'duncan';
console.log(arr);
console.log(arr4);

// 这种方法虽然可以实现数组或对象深拷贝,但不能处理函数
let arr = [1, 3, {username: ' kobe'},function(){}];
let arr4 = JSON.parse(JSON.stringify(arr));
arr4[2].username = 'duncan';
console.log(arr, arr4)

/**
 * 2.手写递归方法
 * 递归方法实现深度克隆原理：遍历对象、数组直到里边都是基本数据类型，然后再去复制，就是深度拷贝
 */
function deepClone(obj) {
  let copy = obj instanceof Array ? [] : {};
  for(let i in obj) {
    if(obj.hasOwnProperty(i)) {
      copy[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
    }
  }
  return copy;
}

let arr = [1, 3, {username: ' kobe'}, function(){}];
let a = deepClone(arr);
a[2].username = 'cda';
console.log(arr);
console.log(a);

/**
 * 3. lodash函数库
 */
var lodash = require('lodash');
var obj = {
  a: 1,
  b: {f:{g:1}},
  c: [1,2,3]
}
var obj1 = lodash.cloneDeep(obj);
console.log(obj.b.f === obj1.b.f); // false
