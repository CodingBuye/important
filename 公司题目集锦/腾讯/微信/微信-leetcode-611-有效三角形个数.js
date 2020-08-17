var triangleNumber = function(nums) {
    if(nums.length < 3) return 0;
    let ans = 0, len = nums.length;
    nums.sort((a, b) => a-b);
    for(let i=len-1;i>=2;i--){
        let left = 0, right = i-1;
        while(left < right) {
            if(nums[left] + nums[right] > nums[i]) {
                ans += right - left;
                right-=1;
            } else {
                left += 1;
            }
        }
    }
    return ans;
}