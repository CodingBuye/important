/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if(matrix.length === 0 || matrix[0].length===0) return 0;
  let rows = matrix.length;
  let cols = matrix[0].length;
  let maxLen = 0;
  let dp = new Array(rows*cols).fill(0);
  for(let i=0;i<rows;i++){
    for(let j=0;j<cols;j++){
      if(matrix[i][j] === '0') {
        dp[i*cols+j] = 0;
      } else {
        let leftTop = (i-1<0 || j-1<0) ? 0 : dp[(i-1)*cols+j-1];
        let left = j-1<0 ? 0 : dp[i*cols+j-1];
        let top = i-1 < 0 ? 0 : dp[(i-1)*cols+j];
        dp[i*cols+j] = Math.min(leftTop, left, top)+1;
      }
      maxLen = Math.max(maxLen, dp[i*cols+j]);
    }
  }
  return maxLen*maxLen;
}