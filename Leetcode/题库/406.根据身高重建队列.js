/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    return people.length
        ? people
            .sort((a, b) => (a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]))
            .reduce((pre, cur) => (pre.splice(cur[1], 0, cur), pre), [])
        : [];
};

reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]);
