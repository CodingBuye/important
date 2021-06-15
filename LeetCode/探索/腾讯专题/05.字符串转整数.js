var myAtio = function(str) {
    let pattern = /^[+\-]?\d+/g;
    let arr = str.trim().match(pattern);
    let res = 0;
    if(arr) {
        res = arr[0] > 0 ? Math.min(arr[0], Math.pow(2, 31)-1) : Math.max(arr[0], Math.pow(-2, 31));
    }
    return res;
}