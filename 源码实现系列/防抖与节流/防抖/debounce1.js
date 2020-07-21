/**
 * 基本实现：debounce本质上是一个定时器setTimeout，在wait毫秒的时间之后，执行传入的函数
 */
function debounce(func, wait) {
    var timer, result;

    var debounced = function() {
        var context = this;
        var args = arguments;
        if(timer) clearTimeout(timer);
        timer = setTimeout(function(){
            result = func.apply(context, args);
        }, wait);
        return result;
    }

    return debounced;
}