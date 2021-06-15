/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    if(!matrix || matrix.length === 0 || matrix[0].length === 0) return null;
    let rows = matrix.length;
    let cols = matrix[0].length;
    this.preSum = new Array(rows+1);
    for(let i=0;i<rows+1;i++){
        this.preSum[i] = new Array(cols+1).fill(0);
    }
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            this.preSum[i+1][j+1] = this.preSum[i][j+1] + this.preSum[i+1][j] - this.preSum[i][j] + matrix[i][j];
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.preSum[row2+1][col2+1] - this.preSum[row2+1][col1] - this.preSum[row1][col2+1] + this.preSum[row1][col1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */