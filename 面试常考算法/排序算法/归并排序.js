/**
 * 对于给定的一组记录(假设共有n个记录)，首先将每两个相邻长度为1的子序列进行归并，
 * 得到n/2(向上取整)个长度为2或1的有序子序列，再将其两两归并，反复执行此过程，
 * 直到得到一个有序序列为止。
 */

const mergeSort = function (nums) { 
  if(!nums || nums.length <= 1) return nums;
  let half = Math.floor(nums.length/2);
  let left = mergeSort(nums.slice(0, half));
  let right = mergeSort(nums.slice(half));
  return merge(left, right);
}

function merge(left, right) {
  let i = j = 0;
  let res = [];
  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  res = res.concat(left.slice(i));
  res = res.concat(right.slice(j));
  return res;
}

console.log(mergeSort([3, 4, 2, 8, 9, 5, 1]))