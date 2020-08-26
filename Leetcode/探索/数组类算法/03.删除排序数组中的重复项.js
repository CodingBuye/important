var removeDuplicates = function(nums) {
    let len = nums.length;
    if(len < 2) return len;
    let left = 0, right = 1;
    let count = 1;
    while(right < len) {
        while(right < len && nums[right] === nums[left]) {
            right++;
        }
        if(right === len) {
            return count;
        } else {
            left += 1;
            [nums[left], nums[right]] = [nums[right], nums[left]];
            right+=1;
            count+=1;
        }
    }
    return count;
}