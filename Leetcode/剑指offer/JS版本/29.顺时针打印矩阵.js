/**
 * https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
 */
var spiralOrder = function(matrix) {
    if(!matrix || matrix.length === 0 || matrix[0].length === 0) return [];
    let ans = [];
    let start = 0;
    let rows = matrix.length;
    let cols = matrix[0].length;
    while(start * 2 < rows && start * 2 < cols) {
        solve(matrix, rows, cols, start, ans);
        start+=1;
    }
    return ans;
}

function solve(matrix, rows, cols, start, ans) {
    let endRow = rows - start - 1;
    let endCol = cols - start - 1;
    // 从左到右
    for(let i=start;i<=endCol;i++) {
        ans.push(matrix[start][i]);
    }

    // 从上到下
    if(start < endRow) {
        for(let i=start+1;i<=endRow;i++){
            ans.push(matrix[i][endCol]);
        }
    }

    // 从右到左
    if(start < endCol && start < endRow) {
        for(let i=endCol-1;i>=start;i--){
            ans.push(matrix[endRow][i]);
        }
    }

    // 从下到上
    if(start < endCol && start < endRow-1) {
        for(let i=endRow-1;i>start;i--){
            ans.push(matrix[i][start]);
        }
    }
}

// 测试
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralOrder(matrix));