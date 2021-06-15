/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if(!nums || nums.length === 0) return false;
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right-left)/2);
        if(nums[mid] === target || nums[left] === target || nums[right] === target) {
            return true;
        }
        if(nums[mid] > nums[left]) {
            if(target > nums[mid]) {
                left = mid + 1;
            } else {
                if(target > nums[left]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        } else if(nums[mid] < nums[left]) {
            if(target < nums[mid]) {
                right = mid - 1;
            } else {
                if(target < nums[left]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        } else {
            left++;
        }
    }
    return false;
};

console.log(search([2,5,6,0,0,1,2], 0));
console.log(search([2,5,6,0,0,1,2], 3));
