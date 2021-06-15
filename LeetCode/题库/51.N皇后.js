var solveNQueens = function(n) {
    const board = new Array(n);
    for(let i=0;i<n;i++){
        board[i] = new Array(n).fill(".");
    }

    const cols = new Set(); // 列集，记录出现过皇后的列
    const main = new Set(); // 正对角线集
    const subs = new Set(); // 副对角线集
    const res = [];

    const helper = function(row) {
        if(row === n) {
            const str = board.slice();
            console.log(str)
            for(let i=0;i<n;i++){
                str[i] = str[i].join('');
            }
            res.push(str);
            return;
        }

        for(let col=0;col<n;col++){
            if(!cols.has(col) && !main.has(row+col) && !subs.has(row-col)) {
                board[row][col] = 'Q';
                cols.add(col);
                main.add(row+col);
                subs.add(row-col);
                helper(row+1);
                board[row][col] = ".";
                cols.delete(col);
                main.delete(row+col);
                subs.delete(row-col);
            }
        }
    }

    helper(0);
    return res;
}