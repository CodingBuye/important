/**
 * https://segmentfault.com/a/1190000016418021
 */
function arrayNoRepeat(arr) {
    let map = new Map();
    let res = [];
    for(let item of arr) {
        if(!map.has(item)) {
            res.push(item);
            map.set(item, true);
        }
    }
    return res;
}

console.log(arrayNoRepeat([1,2,3,4,5,6,2,3,4,13,434,5,24,23]));