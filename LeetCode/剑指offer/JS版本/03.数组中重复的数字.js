/**
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof
 */

var findRepeatNumber = function(nums) {
  if(nums === null || nums.length === 0) return -1;
  for(let num of nums) {
    if(num < 0 || num > num.length-1){
      return -1;
    }
  }

  for(let i=0;i<nums.length;i++){
    while(nums[i] !== i) {
      if(nums[i] === nums[nums[i]]) {
        return nums[i];
      }
      let temp = nums[i];
      nums[i] = nums[temp];
      nums[temp] = temp;
    }
  }
  return -1;
}

// 测试
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
