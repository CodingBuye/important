const islandPerimeter = function (grid) {
    if (!grid || grid.length === 0 || grid[0].length === 0) return 0;
    let rows = grid.length, cols = grid[0].length;
    let land = 0;
    let border = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                land++;
                if(i < rows - 1 && grid[i+1][j] === 1) {
                    border++;
                }
                if(j < cols - 1 && grid[i][j+1] === 1) {
                    border++;
                }
            }
        }
    }
    return 4*land - 2*border;
};

let grid = [[0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]];
console.log(islandPerimeter((grid)));
