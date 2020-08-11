/**
 * 对于一组给定的记录，通过一趟排序后，将原序列分为两部分，
 * 其中前部分的所有记录都比后部分的所有记录小，然后再依次对前后两部分的记录进行快速排序，
 * 递归该过程，直到序列中的所有记录均有序为止。
 */
const quickSort = function(nums, left, right) {
  if(left >= right) return nums;
  let key = nums[left];
  let low = left;
  let high = right;
  while(left < right) {
    while(left < right && nums[right] >= key) {
      right -= 1;
    }
    nums[left] = nums[right];
    while(left < right && nums[left] <= key) {
      left += 1;
    }
    nums[right] = nums[left];
  }
  nums[right] = key;
  quickSort(nums, low, left-1);
  quickSort(nums, left+1, high);
  return nums;
}

console.log(quickSort([3, 4, 2, 8, 9, 5, 1], 0, 6))