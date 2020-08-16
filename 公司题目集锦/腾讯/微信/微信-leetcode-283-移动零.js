/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 */
var moveZeros = function(nums) {
    if(nums.length <= 1) return nums;
    let i = 0, j = 1;
    let len = nums.length;
    while(j < len) {
        if(nums[i] === 0) {
            while(j<len && nums[j] === 0) {
                j+=1;
            }
            if(j === len) {
                break;
            } else {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i+=1;
                j+=1;
            }
        } else {
            i+=1;
            j+=1;
        }
    }
    return nums;
}