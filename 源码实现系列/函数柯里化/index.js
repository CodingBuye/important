const addFn = (a, b, c, d, e) => {
  return a + b + c + d + e
}
const add = curry(addFn)
console.log(add(1)(2)(3)(4, 5)) // 15
console.log(add(1)(2)(3, 4, 5)) // 15
console.log(add(1, 2, 3)(4, 5)) // 15

function curry(func, ...args) {
	// // 如果参数大于等于了要改变函数的参数了，那么直接执行就可以了
	if(args.length >= func.length) {
		return func(...args);
	} 
	// 否则就返回一个函数，函数把所有参数都累积到一起
	return function(...params) {
		return curry(...args, ...params);
	}
}
