/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.preNums = new Array(nums.length+1).fill(0);
    nums.forEach((val, index) => {
        this.preNums[index+1] = this.preNums[index] + val;
    })
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.preNums[j+1] - this.preNums[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */