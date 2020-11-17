/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
    const res = [];
    const visited = new Array(R);
    for (let i = 0; i < R; i++) {
        visited[i] = new Array(C).fill(false);
    }

    const q = [[r0, c0]];
    visited[r0][c0] = true;

    while (q.length) {
        const cur = q.shift();
        const x = cur[0], y = cur[1];
        res.push(cur);

        if (x + 1 < R && !visited[x + 1][y]) {
            q.push([x + 1, y]);
            visited[x + 1][y] = true;
        }
        if (x - 1 >= 0 && !visited[x - 1][y]) {
            q.push([x - 1, y]);
            visited[x - 1][y] = true;
        }
        if (y - 1 >= 0 && !visited[x][y - 1]) {
            q.push([x, y - 1]);
            visited[x][y - 1] = true;
        }
        if (y + 1 < C && !visited[x][y + 1]) {
            q.push([x, y + 1]);
            visited[x][y + 1] = true;
        }
    }
    return res;
};
