// 最优连续子序列，求最大交替和
// 给定一个数列，找出其中的子序列，需具备最大交替和（）
// a1, a2, a3, a4, a5, a6， 交替和 = a1 - a2 + a3 -a4 + a5 -a6
// 假如某序列从 ni -> nj, 那么其 交替和 = sum(x)，即满足条件的x的累加值; x = num * (-1)(indexX - i) 
// 输入数据为2个，第一个n为总共数字数，第二个arr为数组

// 例1： 
// 输入：5, [1, 2, 3, 4, 5]      
// 输出： 5

// 例2： 
// 输入：5, [1, -2, 3, -4, 5]      
// 输出： 15


/*
思路：
参考最大子序列和的动态规划解法
    dp[i] = max(dp[i-1] + arr[i], arr[i])

本题在元素累加时涉及到正负号，取值 opt = Math.pow(-1, (currentIndex - startIndex))
在dp[i] 中存2个值，1个是当前累加值 sum，该值代表到dp[i]为止，最大子序列的累加和（包括dp[i]）
另一个是取到 sum 时前一个的符号，记为opt，本数应该和前一个数的符号相反。
*/

// T = O(n)，每个元素遍历一遍
// S = O(n)，dp数组长为n，因为dp[i] 只跟 dp[i-1] 有关，可以优化至 O(1)
function solution(n, arr) {
    if (n <=0 || !arr || !arr.length) {
        return
    }

    dp = []
    dp[0] = [arr[0], 1]
    max = arr[0]

    for (let i = 1; i < n; i++) {
        [preSum, preOpt] = dp[i-1]
        curSum = preSum + (-(preOpt) * arr[i])
        if (curSum > arr[i]) {// 累加值 比 arr[i] 白手起家大，就加入累加
            dp[i] = [curSum, -(preOpt)] // 累加值，以及当前正负加进去;当前符号等于上个符号的相反数
        } else { // arr[i] 白手起家，符号为正1
            dp[i] = [arr[i], 1]
        }
        if (dp[i][0] > max) { // 是否更新全局最大和 max
            max = dp[i][0]
        }
    }

    return max
}

arr1 = [1, 2, 3, 4, 5]
res1 = solution(5, arr1)
console.log(res1) // 5, pass


arr2 = [1, -2, 3, -4, 5] 
res2 = solution(5, arr2)
console.log(res2); // 15, pass


// 优化空间至常数级版
function solution2(n, arr) {
    if (n <=0 || !arr || !arr.length) {
        return
    }

    dp = [arr[0], 1] // 只存一个dp，走到一下个元素时更新该dp存下一个元素的值
    max = arr[0]

    for (let i = 1; i < n; i++) {
        [preSum, preOpt] = dp
        curSum = preSum + (-(preOpt) * arr[i])
        if (curSum > arr[i]) {// 累加值 比 arr[i] 白手起家大，就加入累加
            dp = [curSum, -(preOpt)] // 累加值，以及当前正负加进去;当前符号等于上个符号的相反数
        } else { // arr[i] 白手起家，符号为正1
            dp = [arr[i], 1]
        }
        if (dp[0] > max) { // 是否更新全局最大和 max
            max = dp[0]
        }
    }

    return max
}

res3 = solution2(5, arr1)
console.log(res3) // 5, pass


res4 = solution2(5, arr2)
console.log(res4); // 15, pass