/**
 * https://leetcode-cn.com/problems/maximum-product-of-three-numbers/
 */
var maximumProduct = function(nums) {
    let min1 = Number.MAX_SAFE_INTEGER, min2 = Number.MAX_SAFE_INTEGER;
    let max1 = Number.MIN_SAFE_INTEGER, max2 = Number.MIN_SAFE_INTEGER, max3 = Number.MIN_SAFE_INTEGER;
    for(let n of nums) {
        if(n <= min1) {
            min2 = min1;
            min1 = n;
        } else if(n <= min2) {
            min2 = n;
        }

        if(n >= max1) {
            max3 = max2;
            max2 = max1;
            max1 = n;
        } else if(n >=  max2) {
            max3 = max2;
            max2 = n;
        } else if(n >= max3){
            max3 = n;
        }
    }
    return Math.max(min1*min2*max1, max1*max2*max3);
}