var fourSum = function(nums, target) {
    if(nums.length < 4) return [];
    let len = nums.length;
    nums.sort((a, b) => a-b);
    let res = [];
    for(let i=0;i<len-3;i++){
        if(i>0 && nums[i] === nums[i-1]) continue;
        for(let j=i+1;j<len-2;j++){
            if(j > i+1 && nums[j] === nums[j-1]) continue;
            let left = j+1, right = len-1;
            while(left < right) {
                let s = nums[i] + nums[j] + nums[left] + nums[right];
                if(s < target) {
                    left+=1;
                } else if(s > target) {
                    right -= 1;
                } else {
                    res.push([nums[i],nums[j],nums[left],nums[right]]);
                    left += 1;
                    right-=1;
                    while(left < right && nums[left] === nums[left-1]) {
                        left+=1;
                    }
                    while(left < right && nums[right] === nums[right+1]) {
                        right-=1;
                    }
                }
            }
        }
    }
    return res;
}