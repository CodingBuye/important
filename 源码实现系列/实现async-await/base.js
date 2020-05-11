/**
 * async/await的使用意义:
 * 在多个回调依赖的场景中，尽管Promise通过链式调用取代了回调嵌套，
 * 但过多的链式调用可读性仍然不佳，流程控制也不方便，ES7 提出的async 函数，
 * 终于让 JS 对于异步操作有了终极解决方案，简洁优美地解决了以上两个问题。
 * 
 * async/await实际上是对Generator（生成器）的封装，是一个语法糖。
 * 
 * ES6 新引入了 Generator 函数，可以通过 yield 关键字，把函数的执行流挂起，
 * 通过next()方法可以切换到下一个状态，为改变执行流程提供了可能，
 * 从而为异步编程提供解决方案。
 */
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
var hw = helloWorldGenerator();
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
