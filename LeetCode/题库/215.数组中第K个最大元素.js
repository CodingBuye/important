var findKthLargest = function(nums, k) {
    let left = 0, right = nums.length-1;
    let index = -1;
    while(index !== k-1) {
        index = partition(nums, left, right);
        if(index < k-1) {
            left = index + 1;
        } else if(index > k-1) {
            right = index - 1;
        }
    }
    return nums[index];
}

function partition(nums, left, right) {
    let key = nums[left];
    while(left < right) {
        while(left < right && nums[right] <=key) {
            right--;
        }
        nums[left] = nums[right];
        while(left < right && nums[left] >= key) {
            left++;
        }
        nums[right] = nums[left];
    }
    nums[left] = key;
    return left;
}

// 测试
console.log(findKthLargest([3,2,1,5,6,4], 2));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));