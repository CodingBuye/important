/**
 * 基本实现：debounce本质上是一个定时器setTimeout，在wait毫秒的时间之后，执行传入的函数
 * 传参 immediate 为 true， debounce会在 wait 时间间隔的开始调用这个函数 。
 * （注：并且在 wait 的时间之内，不会再次调用。）在类似不小心点了提交按钮两下而提交了两次的情况下很有用。
 */
function debounce(func, wait, immediate) {
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
                result = func.apply(context, args);
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