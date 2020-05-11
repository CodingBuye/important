/**
 * 对于给定的一组记录，经过第一轮比后得到最小的记录，然后将该记录与第一个记录交换；
 * 接着对不包括第一个记录以外的其他记录进行第二轮的比较，得到最小的记录并与第二个记录进行位置交换；
 * 重复该过程，直到比较的记录只有一个时为止。
 * 
 * 选择排序是一种不稳定的排序，最好、最坏和平均情况下的时间复杂度都为O(n^2),空间复杂度为O(1).
 */
const selectSort = function(nums) {
  if(nums.length === 0) return [];
  let len = nums.length;
  for(let i=0;i<len-1;i++){
    let minIndex = i;
    for(let j=i+1;j<len;j++){
      if(nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
  return nums;
}

// 测试
let nums = [3, 4, 2, 8, 5, 11];
console.log(selectSort(nums));
