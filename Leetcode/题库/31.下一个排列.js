var nextPermutation = function(nums) {
    let len = nums.length;
    if(len <= 1) return;
    let i = len-2, j = len-1, k = len-1;
    while(i>=0 && nums[i] >= nums[j]) {
        i-=1;
        j-=1;
    }

    if(i >= 0) {
        while(nums[i] >= nums[k]) {
            k-=1;
        }
        [nums[i], nums[k]] = [nums[k], nums[i]];
    }
    for(let i=i, j=len-1;i<j;i++,j--) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
}