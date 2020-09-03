var maxSubArray = function(nums) {
    let ans = nums[0];
    for(let i=1,len=nums.length;i<len;i++){
        if(nums[i-1] > 0) {
            nums[i] += nums[i-1];
        }
        ans = Math.max(ans, nums[i]);
    }
    return ans;
}