var exist = function(board, word) {
    if(!board || !word || board.length === 0 || board[0].length === 0) return false;
    let rows = board.length;
    let cols = board[0].length;
    let path = 0;
    let visited = new Array(rows * cols);
    for(let row=0;row<rows;row++){
        for(let col=0;col<cols;col++) {
            if(hasPathCore(board, rows, cols, row, col, word, path, visited)) {
                return true;
            }
        }
    }
    return false;
}

function hasPathCore(board, rows, cols, row, col, word, path, visited) {
    if(path === word.length) return true;
    let hasPath = false;
    if(row >=0 && row < rows && col>=0 && col<cols 
        && board[row][col] === word[path] 
        && !visited[row*cols+col]) {
        path+=1;
        visited[row*cols+col] = true;
        hasPath = hasPathCore(board, rows, cols, row+1, col, word, path, visited) ||
                    hasPathCore(board, rows, cols, row-1, col, word, path, visited) ||
                    hasPathCore(board, rows, cols, row, col+1, word, path, visited) ||
                    hasPathCore(board, rows, cols, row, col-1, word, path, visited);
        if(!hasPath) {
            path-=1;
            visited[row*cols+col] = false;
        }
    }
    return hasPath;
}