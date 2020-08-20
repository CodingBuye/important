Array.prototype.fakeFlat = function(num=1) {
    if(!Number(num) || Number(num) < 0) return this;
    let arr = this.concat();
    while(num > 0) {
        if(arr.some(x => Array.isArray(x))) {
            arr = [].concat.apply([], arr);
        } else {
            break;
        }
        num-=1;
    }
    return arr;
}

// 测试
let a = [1, 2, 3, [4, 5], [6, [7]]];
console.log(a.fakeFlat(2));