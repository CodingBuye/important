var canPartition = function(nums) {
    if(!nums || nums.length < 2) return false;
    let sum = nums.reduce((a, b) => a+b, 0);
    if(sum % 2 !== 0) return false;
    let half = parseInt(sum/2);
    let dp = new Array(nums.length);
    for(let i=0;i<dp.length;i++){
        dp[i] = new Array(half+1).fill(false);
    }

    if(nums[0] <= half) {
        dp[0][nums[0]] = true;
    }
    for(let i=1;i<nums.length;i++){
        for(let j=0;j<=half;j++){
            dp[i][j] = dp[i-1][j];
            if(nums[i] === j) {
                dp[i][j] = true;
                continue;
            }
            if(nums[i] < j) {
                dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i]];
            }
        }
    }
    return dp[nums.length-1][half];
}

let arr = [1, 5, 11, 5];
console.log(canPartition(arr));