/**
 * 赋值和浅拷贝的区别:
 * 1. 当我们把一个对象赋值给一个新的变量时，赋的其实是该对象的在栈中的地址，而不是堆中的数据。
 *    也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，
 *    因此，两个对象是联动的。
 * 2. 浅拷贝是按位拷贝对象，它会创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。
 *    如果属性是基本类型，拷贝的就是基本类型的值；如果属性是内存地址（引用类型），拷贝的就是内存地址 ，
 *    因此如果其中一个对象改变了这个地址，就会影响到另一个对象。
 *    即：默认拷贝构造函数只是对对象进行浅拷贝复制(逐个成员依次拷贝)，即只复制对象空间而不复制资源
 */

var obj1 = {
  name: 'zhangsan',
  age: 18,
  language: [1, [2, 3], 4, 5]
}

// 对象赋值
var obj2 = obj1;
obj2.name = "lisi";
obj2.language[1] = ["二", "三"];
console.log("对象赋值")
console.log(obj1);
console.log(obj2);

// 浅拷贝
var obj3 = shadowCopy(obj1);
obj3.name = "wangwu";
obj3.language[1] = ["2", "3"];

function shadowCopy(src) {
  var dst = {};
  for(var prop in src) {
    if(src.hasOwnProperty(prop)) {
      dst[prop] = src[prop];
    }
  }
  return dst;
}
console.log(obj1);
console.log(obj3);