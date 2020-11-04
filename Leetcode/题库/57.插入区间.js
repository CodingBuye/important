/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function (intervals, newInterval) {
    let res = [];
    let len = intervals.length;
    let i = 0;
    while (i < len && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i]);
        i++;
    }

    while (i < len && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], newInterval[i][0]);
        newInterval[1] = Math.max(newInterval[1], newInterval[i][1]);
        i++;
    }
    res.push(newInterval);
    while (i < len) {
        res.push(intervals[i]);
        i++;
    }
    return res;
};

let intervals = [[1,3],[6,9]], newInterval = [2,5];
console.log(insert(intervals, newInterval));
