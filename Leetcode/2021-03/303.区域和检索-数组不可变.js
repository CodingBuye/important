/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.preNums = new Array(nums.length+1);
    this.preNums[-1] = 0;
    nums.forEach((val, index) => {
        if(index === 0) {
            this.preNums[index] = val;
        } else {
            this.preNums[index] = this.preNums[index-1] + val;
        }
    })
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.preNums[j] - this.preNums[i-1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */