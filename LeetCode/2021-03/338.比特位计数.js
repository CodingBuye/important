/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    if(num < 0) return [];
    let res = new Array(num+1);
    res[0] = 0;
    for(let i=1;i<=num;i++) {
        res[i] = i % 2 === 0 ? res[parseInt(i/2)] : res[i-1] + 1;
    }
    return res;
};

console.log(countBits(2));
console.log(countBits(5));