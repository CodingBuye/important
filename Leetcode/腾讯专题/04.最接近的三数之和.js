var threeSumCloset = function(nums, target) {
    if(nums.length < 3) return nums;
    let len = nums.length;
    nums.sort((a, b) => a-b);

    let ans = nums[0] + nums[1] + nums[2];
    for(let i=0;i<=len-3;i++){
        let left = i+1, right = len-1;
        while(left < right) {
            let res = nums[i] + nums[left] + nums[right];
            if(res === target) {
                return target;
            } else if(res < target) {
                left++;
            } else {
                right--;
            }
            if(Math.abs(target-res) < Math.abs(target-ans)) {
                ans = res;
            }
        }
    }
    return ans;
}