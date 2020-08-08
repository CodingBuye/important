/**
 * 给出一个区间的集合，请合并所有重叠的区间。
 * @param {*} intervals 
 */

var merge = function(intervals) {
    if(!intervals || intervals.length <= 1) return intervals;
    intervals.sort((a, b) => a[0]-b[0]);
    let res = [];
    let temp = intervals[0];
    for(let i=1, len = intervals.length;i<len;i++){
        let curr = intervals[i];
        if(curr[1] <= temp[1]) {
            continue;
        } else {
            if(curr[0] <= temp[1]) {
                temp[1] = curr[1];
            } else {
                res.push([...temp]);
                temp = curr;
            }
        }
    }
    res.push([...temp]);
    return res;
}

// 测试
const intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals));