/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
    if (!nums || nums.length === 0) return;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.min(...nums);
    let left = 0, right = nums.length - 1, mid = 0;
    while(nums[left] >= nums[right]) {
        if(right-left === 1) {
            mid = right;
            break;
        }
        mid = left + Math.floor((right-left)/2);
        if(nums[left] === nums[right] && nums[left] === nums[mid]) {
            return minInOrder(nums, left, right);
        }
        if(nums[mid] >= nums[left]) {
            left = mid;
        } else if(nums[mid] <= nums[right]) {
            right = mid;
        }
    }
    return nums[mid];
};

function minInOrder(nums, left, right) {
    let res= nums[left];
    for(let i=left+1;i<right;i++) {
        res = Math.min(res, nums[i]);
    }
    return res;
}

console.log(findMin([1,3,5]));
console.log(findMin([2,2,2,0,1]));
