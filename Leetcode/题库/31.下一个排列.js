/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 参考：https://leetcode-cn.com/problems/next-permutation/solution/xia-yi-ge-pai-lie-suan-fa-xiang-jie-si-lu-tui-dao-/
 */
var nextPermutation = function(nums) {
    if(!nums || nums.length <= 1) return;
    let len = nums.length;
    let i = len-2, j = len-1, k = len-1;
    while(i >= 0 && nums[i] >= nums[j]) {
        i-=1;
        j-=1;
    }

    if(i >= 0) {
        while (nums[i] >= nums[k]) {
            k-=1;
        }
        [nums[i], nums[k]] = [nums[k], nums[i]];
    }

    for(i=j,j=len-1;i<j;i++,j--) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
};
