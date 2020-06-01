'''
### 
https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/
解题思路
双指针滑动窗口，通过前后指针。因为最大的两个可能连续数字是target/2 与target/2 +1。
从1开始只要依然小于目标值，一直累加，如果大于则减去第一个值，如果等于直接将当前的[start:end]切片加入返回列表

### 代码
'''
class Solution:
    def findContinuousSequence(self, target: int) -> List[List[int]]:
        
        if target == 0:
            return []
        if target == 1:
            return []
        start,end = 1,1
        sum_num = 0
        res = []
        mid = target//2
        while start <= mid:
            if sum_num < target:
                sum_num += end
                end += 1
            elif sum_num > target:
                sum_num -= start
                start += 1
            else:
                arr = list(range(start,end))
                res.append(arr)
                sum_num -= start
                start += 1
        return res
