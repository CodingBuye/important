var removeElement = function(nums, val){
    let count = 0;
    let left = 0, right = nums.length-1;
    let length = nums.length;
    while(left <= right) {
        while(left < length && nums[left] !== val) {
            left+=1;
        }
        while(right >= 0 && nums[end] === val) {
            count+=1;
            right-=1;
        }
        if(left >= right || left >= len || right < 0) break;
        [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    return nums.length - count;
}