/*

参考：https://zhuanlan.zhihu.com/p/86426949

防抖函数的核心思路：
- 当触发一个函数时，并不会立即执行这个函数，而是会延迟（通过定时器来延迟函数的执行）
	- 如果在延迟时间内，有重新触发函数，那么取消上一次的函数执行（取消定时器）
	- 如果在延迟时间内，没有重新触发函数，那么这个函数就正常执行（执行传入的函数）

某些场景是用户开始输入时的第一次是立即执行的，后续的输入才需要等待，我们可以如何优化呢？
- 我们可以让用户多传入一个参数：immediate
- 那么第一次就立即执行
- 后来的事件需要等待delay时间执行
- immediate为false，或者不传，那么按照上面的防抖进行操作
- immediate为true
*/

function debounce(fn, wait, immediate) {
	var timer, result;
	var debounced = function() {
		var context = this;
		var args = arguments;
		if(timer) clearTimeout(timer);

		if(immediate) {
			var callNow = !timer;
			timer = setTimeout(function(){
				timer = null;
			}, wait);
			if(callNow) {
				result = fn.apply(context, args);
			}
		} else {
			timer = setTimeout(function(){
				result = func.apply(context, args);
			}, wait);
		}
		return result;
	}

	debounced.cancel = function() {
		if(timer) clearTimeout(timer);
		timer = null;
	}

	return debounced;
}