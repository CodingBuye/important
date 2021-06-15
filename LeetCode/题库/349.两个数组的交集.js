/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let st = new Set();
    nums1.sort((a, b) => a-b);
    nums2.sort((a, b) => a-b);
    let i = 0, j = 0, len1 = nums1.length, len2 = nums2.length;
    while (i<len1 && j<len2) {
        if(nums1[i] < nums2[j]) {
            i++;
        } else if(nums1[i] === nums2[j]) {
            st.add(nums1[i]);
            i++;
            j++;
        } else {
            j++;
        }
    }
    return [...st];
};

let nums1 = [1,2,2,1], nums2 = [2,2];
console.log(intersection(nums1, nums2));
