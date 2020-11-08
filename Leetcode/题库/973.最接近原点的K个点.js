/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    if(!points || points.length === 0 || points.length < K) return [];
    points.sort((a, b) => {
        return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2)) - Math.sqrt(Math.pow(b[0], 2) + Math.pow(b[1], 2))
    });
    return points.slice(0, K);
};

const points1 = [[1,3],[-2,2]], K1 = 1;
console.log(kClosest(points1, K1));
const points2 = [[3,3],[5,-1],[-2,4]], K2 = 2;
console.log(kClosest(points2, K2));