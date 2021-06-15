/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
    if(!nums || nums.length === 0) return;
    if(nums.length === 1) return nums[0];
    let left = 0, right = nums.length - 1;
    if(nums[left] < nums[right]) return nums[left];
    while(left < right) {
        let mid = left + Math.floor((right-left)/2);
        if(nums[mid] < nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return nums[left];
};

console.log(findMin([3,4,5,1,2]));
console.log(findMin([4,5,6,7,0,1,2]));
console.log(findMin([11,13,15,17]));
