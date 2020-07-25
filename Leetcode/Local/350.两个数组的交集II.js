/**
 * 微信
 */
var intersect1 = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let res = [];
  let p = q = 0;
  while(p < nums1.length && q < nums2.length) {
    if(nums1[p] < nums2[q]) {
      p++;
    } else if(nums1[p] === nums2[q]) {
      res.push(nums1[p]);
      p++;
      q++;
    } else {
      q++
    }
  }
  return res;
}
