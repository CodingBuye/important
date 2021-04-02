/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(!height || height.length === 0) return 0;
    // 柱子的高度和
    let sum = height.reduce((a, b) => a+b, 0);
    let left = 0, right = height.length-1;
    let level = 1;
    let volume = 0; // 总体积
    while (left <= right) {
        while (left <= right && height[left] < level) {
            left++;
        }
        while (left <= right && height[right] < level) {
            right--;
        }
        volume += right - left + 1;
        level++;
    }
    return volume - sum;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
