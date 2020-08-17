var minSubArrayLen = function(s, nums) {
    if(!nums || nums.length === 0) return 0;
    let left = 0, right = 0;
    let len = nums.length;
    let minLen = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    while(right < len) {
        sum += nums[right];
        while(sum >= s) {
            minLen = Math.min(minLen, right-left+1);
            sum -= nums[left];
            left += 1;
        }
        right+=1;
    }
    return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
}