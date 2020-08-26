var jump = function(nums) {
    let steps = 0;
    let end = 0;
    let maxPos = 0;
    for(let i=0;i<nums.length-1;i++){
        //找能跳的最远的
        maxPos = Math.max(maxPos, i+nums[i]);
        if(i === end) { //遇到边界，就更新边界，并且步数加一
            end = maxPos;
            steps+=1;
        }
    }
    return steps;
}