/**
 * https://leetcode-cn.com/problems/palindromic-substrings/
 */
var countSubstrings = function(s) {
    if(!s || s.length === 0) return 0;
    let len = s.length;
    let count = 0;
    let dp = new Array(len);
    for(let i=0;i<len;i++){
        dp[i] = new Array(len).fill(false);
        dp[i][i] = true;
        count++;
    }
    for(let j=1;j<len;j++){
        for(let i=0;i<j;i++){
            if(s[i] === s[j]) {
                if(j-i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i+1][j-1];
                }
            } else {
                dp[i][j] = false;
            }

            if(dp[i][j]) {
                count+=1;
            }
        }
    }
    return count;
}

// 测试
console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));