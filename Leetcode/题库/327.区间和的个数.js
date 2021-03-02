/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
// TODO: 2020-11-08
var countRangeSum = function(nums, lower, upper) {
    if(!nums || nums.length === 0) return 0;
    let res = 0, len = nums.length;
    for(let i=0;i<len;i++){
        let temp = nums[i];
        for(let j=0;j<len;j++){
            if(i !== j) {
               temp += nums[j];
            }
            if(temp >= lower && temp <= upper) {
                res += 1;
            }
        }
    }
};

let nums = [], lower = -2, upper = 2;
console.log(countRangeSum(nums, lower, upper));
