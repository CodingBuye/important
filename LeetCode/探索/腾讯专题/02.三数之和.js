var threeSum = function(nums) {
    if(!nums || nums.length < 3) return [];
    let ans = [];
    let len = nums.length;
    nums.sort((a,b)=>a-b);
    for(let i=0;i<len;i++){
        if(nums[i] > 0) break;
        if(i>0 && nums[i] === nums[i-1]) continue;
        let left = i+1, right = len-1;
        let sum = 0;
        while(left < right) {
            sum = nums[i] + nums[left] + nums[right];
            if(sum === 0) {
                ans.push([nums[i], nums[left], nums[right]]);
                while(left < right && nums[left] === nums[left+1]) left++;
                while(left < right && nums[right] === nums[right-1]) right--;
                left+=1;
                right-=1;
            } else if(sum < 0) {
                left += 1;
            } else {
                right -= 1;
            }
        }
    }
    return ans;
}