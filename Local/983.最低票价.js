/**
 * 动态规划
 * dp[i]表示第i天最小钱数
 * 如果 : 第i天没旅行，第i天的最小钱数 = 第i-1天的最小钱数
 * 否则 : 第i天的最小钱数 = min ( 第i-1天的最小钱数+1天票钱costs[0] , 第i-7天的最小钱数+7天票钱costs[1] ,第i-30天的最小钱数+30天票钱costs[2])
 * 其中如果 i-1,i-7,i-30<0 那天的最小钱数就为0
 * 
 * 作者：D_dong
 * 链接：https://leetcode-cn.com/problems/minimum-cost-for-tickets/solution/cdong-tai-gui-hua-by-d_dong/
 * 来源：力扣（LeetCode）
 * 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 * 
 */

var minCostTickets = function(days, costs) {
  if(days.length === 0) return 0;
  let lastDay = days[days.length-1]; // 获取旅行的最后一天
  let dp = new Array(lastDay+1).fill(0); // +1是因为数组下标是从0开始的
  let visited = new Array(lastDay+1).fill(false);

  for(let day of days) {
    visited[day] = true; // 标识出哪些天是旅行过的
  }

  for(let i=1;i<=lastDay;i++) {
    if(visited[i] === false) {
      dp[i] = dp[i-1];
    } else {
      let cost1 = (i-1 < 0 ? 0 : dp[i-1]) + costs[0];
      let cost2 = (i-7 < 0 ? 0 : dp[i-7]) + costs[1];
      let cost3 = (i-30 < 0 ? 0 : dp[i-30]) + costs[2];
      dp[i] = Math.min(cost1, cost2, cost3);
    }
  }
  return dp[lastDay];
}

// 测试
console.log(minCostTickets([1,2,3,4,5,6,7,8,9,10,30,31],[2,7,15]));
