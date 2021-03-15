/**
 * @param {number[]} nums
 * @return {number}
 */
const findRepeatNumber = function (nums) {
    if (!nums || nums.length === 0) return -1;
    for (let num of nums) {
        if (num < 0 || num > nums.length - 1) {
            return -1;
        }
    }
    for (let i = 0, len = nums.length; i < len; i++) {
        while (nums[i] !== i) {
            if (nums[nums[i]] === nums[i]) {
                return nums[i];
            }
            let temp = nums[i];
            nums[i] = nums[temp];
            nums[temp] = temp;
        }
    }
    return -1;
};

// 测试
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
