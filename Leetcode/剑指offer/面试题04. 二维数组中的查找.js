/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  if(matrix.length === 0 || matrix[0].length === 0) return false;
  let rows = matrix.length;
  let cols = matrix[0].length;
  let row = 0, col = cols - 1;
  while(row < rows && col >= 0) {
    if(target === matrix[row][col]) {
      return true;
    } else if(target > matrix[row][col]) {
      row += 1;
    } else {
      col -= 1;
    }
  }
  return false;
};

// 测试
let matrix = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

console.log(findNumberIn2DArray(matrix, 5));
console.log(findNumberIn2DArray(matrix, 20));
