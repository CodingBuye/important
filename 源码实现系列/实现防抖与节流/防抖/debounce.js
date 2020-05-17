function debounce(func, wait, immediate) {
  let timeout, result;
  let debounced = function() {
    let context = this;
    let args = arguments;
    clearTimeout(timeout);
    if(immediate) {
      // 表示立即执行
      let callNow = !timeout;
      timeout = setTimeout(()=> {
        timeout = null;
      }, wait);
      if(callNow) {
        result = func.apply(context, args);
      }
    } else {
      timeout = setTimeout(function() {
        result = func.apply(context, args);
      }, wait);
    }
    return result;
  }
  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  }
  return debounced;
}