/**
 * 五种方式：https://www.cnblogs.com/wind-lanyan/p/9044130.html
 */
let arr = [1, [2, 3, [4, 5]]];

// 1. reduce
function flattenByReduce(arr) {
    return arr.reduce((a, b) => {
        return a.concat(Array.isArray(b) ? flattenByReduce(b) : b);
    }, []);
}

console.log('reduce：', flattenByReduce(arr));

// 2. toString & split
function flattenByToString(arr) {
    return arr.toString().split(",").map(item => {
        return Number(item);
    })
}
console.log('toString：', flattenByToString(arr));


// 3. join & split
function flattenByJoin(arr) {
    return arr.join(",").split(",").map(item => {
        return Number(item);
    })
}

console.log('join:', flattenByJoin(arr));

// 4. 递归
function flattenByRecurision(arr) {
    var res = [];
    arr.map(item => {
        if(Array.isArray(item)) {
            res = res.concat(flattenByRecurision(item));
        } else {
            res.push(item);
        }
    });
    return res;
}
console.log('递归:', flattenByRecurision(arr));

// 5. 扩展运算符
function flattenByExtension(arr) {
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.log('扩展运算符:', flattenByExtension(arr));

// MDN
console.log(arr.flat(Infinity));