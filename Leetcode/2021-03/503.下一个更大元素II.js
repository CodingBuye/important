/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    if(!nums || nums.length === 0) return [];
    if(nums.length === 1) return [-1];
    let len = nums.length;
    let ans = new Array(len).fill(0);
    for(let i=0;i<len;i++){
        let cur = nums[i], j = i+1;
        if(j === len) j = 0;
        while(j < len) {
            if(j === i) {
                ans[i] = -1;
                break;
            }
            if(nums[j] > cur) {
                ans[i] = nums[j];
                break;
            } else {
                if(j === len-1) {
                    j = 0;
                } else {
                    j++;
                }
            }
        }
    }
    return ans;
};