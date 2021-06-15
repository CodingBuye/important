var longestPalindrome = function(s) {
    if(!s || s.length <= 1) return s;
    let len = s.length;
    let dp = new Array(len);
    for(let i=0;i<len;i++){
        dp[i] = new Array(len).fill(false);
        dp[i][i] = true;
    } 
    let curLen = 1;
    let start = 0;
    let maxLen = 1;
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
                curLen = j-i+1;
                if(curLen > maxLen) {
                    maxLen = curLen;
                    start = i;
                }
            }
        }
    }
    return s.substring(start, start+maxLen);
}