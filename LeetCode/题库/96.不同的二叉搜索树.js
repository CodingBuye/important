/**
 * https://leetcode-cn.com/problems/unique-binary-search-trees/solution/hua-jie-suan-fa-96-bu-tong-de-er-cha-sou-suo-shu-b/
 */
var numTrees = function(n) {
    let dp = new Array(n+1).fill(0);
    dp[0] = 1; dp[1] = 1;
    for(let i=2;i<=n;i++){
        for(let j=1;j<=i;j++){
            dp[i] += dp[j-1]*dp[i-j];
        }
    }
    return dp[n];
}