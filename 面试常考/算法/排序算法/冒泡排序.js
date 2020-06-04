/**
 * 对于给定的n个记录，从第一个记录开始依次对相邻的两个记录进行比较，
 * 当前面的记录大于后面的记录时，交换其位置，进行一轮比较和换位后，
 * n个记录中的最大记录将位于第n位；然后对前(n-1)个记录进行第二轮比较；
 * 重复该过程直到进行比较的记录只剩下一个为止。
 */
const bubbleSort = function(nums) {
  if(!nums || nums.length === 0) return [];
  let len = nums.length;
  for(let i=0;i<len-1;i++){
    for(let j=i+1;j<len;j++){
      if(nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
}

console.log(bubbleSort([3, 4, 2, 8, 9, 5, 1]))