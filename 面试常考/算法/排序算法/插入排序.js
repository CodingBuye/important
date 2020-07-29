/**
 * 对于给定一组记录，初始时假设第一个记录自成一个有序序列，其余的记录为无序序列；
 * 接着从第二个记录开始，按照记录的大小依次将当前处理的记录插入到其之前的有序序列中，
 * 直到最后一个记录插入到有序序列中为止。
 * 
 * 插入排序是一种稳定的排序方法，最好情况下的时间复杂度为O(n), 
 * 最坏情况下的时间复杂度为O(n^2), 
 * 平均情况下的时间复杂度为O(n^2)。
 * 空间复杂度为O(1).
 */
const insertSort = function(nums) {
  if(!nums || nums.length === 0) return [];
  let len = nums.length;
  for(let i=1;i<len;i++){
    let value = nums[i];
    let j = i-1;
    while(j >= 0) {
      if(nums[j] > value) {
        nums[j+1] = nums[j];
        nums[j] = value;
      }
      j-=1;
    }
  }
  return nums;
}

console.log(insertSort([3, 4, 2, 8, 9, 5, 1]))