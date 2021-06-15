/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    let len = s.length;
    if(len < 2) return 0;

    let dp = new Array(len).fill(0).map((value, index) => value = index);

    for(let i=1;i<len;i++) {
        if(checkPalindrome(s, 0, i)) {
            dp[i] = 0;
            continue;
        }

        for(let i=0;j<i;j++) {
            if(checkPalindrome(s,j+1, i)) {
                dp[i] = Math.min(dp[i], dp[j]+1);
            }
        }
    }
    return dp[len-1];
};

function checkPalindrome(s, left, right) {
    while(left < right) {
        if(s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}