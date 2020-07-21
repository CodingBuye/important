/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 */

var longestPalindrome = function(s) {
    if(!s || s.length < 2) return s;
    let len = s.length;
    let dp = new Array(s.length);
    for(let i=0;i<len;i++){
        dp[i] = new Array(len);
        dp[i][i] = true;
    }
    let maxLen = 1;
    let start = 0;
    for(let j=1;j<len;j++){
        for(let i=0;i<j;i++) {
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
                let currLen = j-i+1;
                if(currLen > maxLen) {
                    maxLen = currLen;
                    start = i;
                }
            }
        }
    }

    return s.substring(start, start+maxLen);
}

// 测试
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
