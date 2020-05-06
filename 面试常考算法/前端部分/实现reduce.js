/**
 * 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 * reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
 */
Array.prototype.myReduce = function(fn, initialValue) {
  if(this.length === 0) {
    if(initialValue === undefined) {
      throw new Error("reduce of empty array with no initialValue");
    } else {
      return initialValue;
    }
  } else {
    let prev = initialValue === undefined ? this[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;
    for(let i=startIndex;i<this.length;i++){
      prev = fn(prev, this[i]);
    }
    return prev;
  }
}

// 测试
let arr = [1,2,3,4,5];
console.log(arr.myReduce((prev, cur) => prev+cur, 0));