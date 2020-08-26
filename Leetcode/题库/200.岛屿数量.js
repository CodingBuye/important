/**
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/number-of-islands
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {*} grid 
 */
var numIslands = function(grid) {
    if(!grid || grid.length === 0 || grid[0].length === 0) return 0;
    let num = 0;
    let rows = grid.length;
    let cols = grid[0].length;
    let visited = new Array(rows*cols).fill(false);
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(visited[i*cols+j] === false && grid[i][j] === "1") {
                num+=1;
                dfs(grid, rows, cols, i, j, visited);
            }
        }
    }
    return num;
}

function dfs(grid, rows, cols, row, col, visited) {
    let directions = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    visited[row*cols+col] = true;
    for(let direction of directions) {
        let i = direction[0]+row;
        let j = direction[1]+col;
        if(i>=0 && i<rows && j>=0 && j<cols && visited[i*cols+j] === false && grid[i][j] === "1") {
            dfs(grid, rows, cols, i, j, visited);
        }
    }
}

// 测试
const grid = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
];
console.log(numIslands(grid));
