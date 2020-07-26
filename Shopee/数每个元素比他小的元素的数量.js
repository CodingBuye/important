/**
 * 数每个元素的比它小的元素的数量
 * 输入[8,1,2,2,3]
 * 输出[4,0,1,1,3]
 * 解释：比8小的有1，2，2，3所以是4
 * 比1小的有0个所以是0
 * 
 * [leetcode 1365] https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 */

var solution = function(arr) {
    if(!arr) return [];
    let len = arr.length;
    let res = [];
    for(let i=0;i<len;i++){
        let temp = 0;
        for(let j=0;j<len;j++){
            if(j === i) continue;
            if(arr[j] < arr[i]) {
                temp+=1;
            }
        }
        res.push(temp);
    }
    return res;
}

// 测试
console.log(solution([8,1,2,2,3]))


var smallerNumberThanCurrent = function(nums) {
    let len = nums.length;
    let res = new Array(len).fill(0);
    let cnt = new Array(101).fill(0);
    for(let i=0;i<len;i++){
        cnt[nums[i]] += 1;
    }

    for(let i=1;i<=100;i++){
        cnt[i] += cnt[i-1];
    }
    for(let i=0;i<len;i++){
        res[i] = cnt[nums[i]-1];
    }
    return res;
}

console.log(smallerNumberThanCurrent([8,1,2,2,3]));