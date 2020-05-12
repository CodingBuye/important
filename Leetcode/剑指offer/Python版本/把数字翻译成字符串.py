'''
给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

动态规划与递归
'''
class Solution:
    def translateNum(self, num: int) -> int:
        num = str(num)
        lenght = len(num)
        if lenght == 1:
            return 1
        dp = [-1 for x in range(lenght)]


        dp[0] = 1
        if int(num[0:2]) < 26 and int(num[0:2]) > 9:
            dp[1] = 2
        else :
            dp[1] = 1
        n = 2
        while n < lenght :
            tmp = num[n-1:n+1]
            if int(tmp) < 26 and int(tmp) > 9:
                dp[n] = dp[n-1] + dp[n-2]
            else:
                dp[n] = dp[n-1]
            n += 1
        return dp[lenght-1]




    
    # def translateNum(self, num: int) -> int:
    #     num = str(num)

    #     lenght = len(num)

    #     if lenght <= 1:
    #         return 1

    #     tmp = num[0:2]

    #     if int(tmp) < 26 and int(tmp) > 9:
    #         return self.translateNum(num[2:]) + self.translateNum(num[1:])
            
    #     else:
    #         return self.translateNum(num[1:])
