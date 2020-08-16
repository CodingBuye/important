var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a-b);
    nums2.sort((a, b) => a-b);
    let ans = [];
    let p1 = 0, p2 = 0;
    let len1 = nums1.length, len2 = nums2.length;
    while(p1 < len1 && p2 < len2) {
        if(nums1[p1] === nums2[p2]) {
            ans.push(nums1[p1]);
            p1++;
            p2++;
        } else if(nums1[p1] < nums2[p2]) {
            p1++;
        } else {
            p2++;
        }
    }
    return ans;
};