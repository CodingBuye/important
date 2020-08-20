Array.prototype.myFlat1 = function(arr) {
    let res = [];
    arr.forEach(item => {
        if(Array.isArray(item)) {
            res = res.concat(arguments.callee(item));
        } else {
            res.push(item);
        }
    })
    return res;
}


Array.prototype.myFlat2 = function(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? myFlat2(cur) : cur);
    }, []);
}