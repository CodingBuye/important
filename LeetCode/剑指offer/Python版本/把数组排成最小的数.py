'''
输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/

自定义排序+快排
'''
#from functools import cmp_to_key
class Solution:
    def minNumber(self, nums: List[int]) -> str:
        # new_list = sorted([str(x) for x in nums],key=cmp_to_key(self.compare))
        new_list = self.quickS([str(x) for x in nums])
        return "".join(new_list)

    def quickS(self,nums):
        if not nums:
            return []
        len_nu = len(nums)
        index = nums[0]
        left =  []
        right = []
        for x in range(1,len_nu):
            if self.compare(index,nums[x]):
                left.append(nums[x])
            else:
                right.append(nums[x])

        return self.quickS(left) + [index] + self.quickS(right)

    def compare(self,num1,num2):
            if num1+num2 >= num2+num1:
                return True
            if  num1+num2 < num2+num1:
                return False
            return 0
