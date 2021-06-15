/**
 * https://leetcode-cn.com/problems/flood-fill/
 */

var floodFill = function(image, sr, sc, newColor) {
    if(newColor === image[sr][sc]) return image;
    let stack = [[sr, sc]];
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let val = image[sr][sc];
    while(stack.length > 0) {
        let point = stack.pop();
        image[point[0]][point[1]] = newColor;
        for(let direction of directions) {
            let [i,j] = [direction[0]+point[0], direction[1]+point[1]];
            if(check(image, i, j, val)) {
                stack.push([i, j]);
            }
        }
    }

    return image;
}

function check(image, i, j, val) {
    if(i >= 0 && i<image.length && j>=0 && j<image[0].length && image[i][j] === val) 
        return true;
    return false;
}