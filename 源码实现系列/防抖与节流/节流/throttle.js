/*
第三个参数options：
如果你想禁用第一次首先执行的话，传递{leading: false}，
如果你想禁用最后一次执行的话，传递{trailing: false}
*/
function throttle(func, wait, options) {
	var timer, result, context, args;
  var previous = 0; // 上一次调用
  if(!options) options = {};

  var later = function() {
    previous = options.leading === false? 0 : Date.now();
    timer = null;
    result = func.apply(context, args);
  }

  var throttled = function() {
    context = this;
    args = arguments;
    var now = Date.now();
    if(!previous && options.leading === false) previous = now;
    var remaining = wait - (now-previous);
    if(remaining <= 0 || remaining > wait) {
      if(timer) {
        clearTimeout(timer);
        timer = null;
      }
      previous = now;
      result = func.apply(context, args);
    } else if(!timer && options.trailing !== false) {
      timer = setTimeout(later, remaining);
    }
  }

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}