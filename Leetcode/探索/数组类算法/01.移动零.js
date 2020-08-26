var moveZeros = function(nums) {
    if(!nums || nums.length < 2) return nums;
    let i = 0, j = 1, len = nums.length;
    while(j<len){
        if(nums[i] === 0) {
            while(j<len && nums[j] === 0) {
                j++;
            }
            if(j === len) {
                break;
            }
            [nums[i], nums[j]] = [nums[j], nums[i]];  
        } 
        i++;
        j++;
    }
    return nums;
}