var canAttendMeeting = function(intervals) {
    if(!intervals || intervals.length <= 1) return true;
    intervals.sort((a, b) => (a[0]-b[0]));
    let temp = intervals[0];
    for(let i=1;i<intervals.length;i++){
        if(temp[1] > intervals[i][0]) {
            return false;
        }
        temp = intervals[i];
    }
    return true;
}

// 测试
let arr1 = [[0,30],[5,10],[15,20]];
let arr2 = [[7,10],[2,4]];
console.log(canAttendMeeting(arr1));
console.log(canAttendMeeting(arr2));