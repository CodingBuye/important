var findLengthOfLCIS = function(nums) {
    if(nums.length <= 1) return nums.length;
    let i = 0, j = 1;
    let len = nums.length;
    let maxLen = 0;
    while(j < len) {
        if(nums[j] > nums[j-1]) {
            j+=1;
        } else {
            maxLen = Math.max(maxLen, j-i);
            i = j;
            j = i+1;
        }
    }
    maxLen = Math.max(maxLen, j-i);
    return maxLen;
}