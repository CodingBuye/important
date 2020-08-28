// TODO: 未通过全部测试用例
var minMeetingRooms = function(intervals) {
    if(intervals.length <= 1) return intervals.length;
    let length = intervals.length;
    intervals.sort((a, b) => a[0]-b[0]);
    let num = 0;
    let temp = intervals[0];
    for(let i=1;i<length;i++){
        if(temp[1]>intervals[i][0]) {
            num+=1;
        }
        temp = intervals[i];
    }
    return num;
}