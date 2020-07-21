/**
 * 基本实现：throttle本质也是一个定时器，在第一次出发事件时，开启定时器，在定时器执行完毕之前，系统会锁住，新触发的事件都不会执行；
 * 定时器执行完毕之后，销毁定时器，系统开放，接受新的事件。
 */

function throttle(func, wait, options) {
    var timer, result, context, args;
    var previous = 0;
    var throttled = function() {
        context = this;
        args = arguments;
        var now = Date.now();
        var remaining = wait - (now - previous);
        if(remaining <= 0) {
            if(timer) {
                clearTimeout(timer);
                timer = null;
            }
            previous = now;
            result = func.apply(context, args);
        } else if(!timer) {
            timer = setTimeout(function(){
                previous = Date.now();
                timer = null;
                result = func.apply(context, args);
            }, remaining);
        }
        return result;
    }

    return throttled;
}