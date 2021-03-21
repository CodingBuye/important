/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
    if(!matrix || matrix.length === 0 || matrix[0].length === 0) return;
    let rows = matrix.length;
    let cols = matrix[0].length;
    let row_zeros = new Set();
    let col_zeros = new Set();
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++) {
            if(matrix[i][j] === 0) {
                row_zeros.add(i);
                col_zeros.add(j);
            }
        }
    }

    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++) {
            if(row_zeros.has(i) || col_zeros.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};


