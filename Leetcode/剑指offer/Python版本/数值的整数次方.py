'''
实现函数double Power(double base, int exponent)，求base的exponent次方。不得使用库函数，同时不需要考虑大数问题。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof

因为使用阶乘是一个o(n)时间复杂度，会超时。因此使用二进制求解，即将n转换成2进制，遇见1则乘。降低时间复杂度为log(n)
'''
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n == 1:
            return x
        if n == 0 :
            return 1
        # res = x
        # if n > 0:
        #     while n-1:
        #         res *= x
        #         n -= 1
        # else:
        #     res = 1/x
        #     while n+1 < 0:
        #         res *= 1/x
        #         n += 1
        if n < 0 :
            x, n = 1/x, -n
        res = 1
        while n:
            if n&1:
                res *= x
            x *= x
            n >>= 1

        return res
