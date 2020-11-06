/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    if(!arr || arr.length === 0) return [];
    let map = new Map();
    arr.sort((a,b) => a-b);
    arr.forEach((value, index, array) => {
        let n = countOne(value);
        if(map.has(n)) {
            map.get(n).push(value);
        } else {
            map.set(n, [value]);
        }
    });
    let indexs = [], ans = [];
    map.forEach((value, index) => {
        indexs.push(index);
    });
    indexs.sort((a, b) => a-b);
    console.log(indexs);
    indexs.forEach(value => {

        ans = ans.concat(map.get(value));
    })
    return ans;
};

function countOne(num) {
    let res = 0;
    while(num !== 0) {
        if(num & 1 === 1) {
            res += 1;
        }
        num >>= 1;
    }
    return res;
}

console.log(sortByBits([10,100,1000,10000]));
console.log(sortByBits([1024,512,256,128,64,32,16,8,4,2,1]));
