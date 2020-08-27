var setColors = function(nums) {
    if(!nums || nums.length === 0) return nums;
    let p0=0, p2 = nums.length-1;
    let curr = p0;
    while(curr <= p2) {
        if(nums[curr] === 0) {
            [nums[curr], nums[p0]] = [nums[p0], nums[curr]];
            curr++;
            p0++;
        } else if(nums[curr] === 2) {
            [nums[curr], nums[p2]] = [nums[p2], nums[curr]];
            p2--;
        } else {
            curr++;
        }
    }
    return nums;
}