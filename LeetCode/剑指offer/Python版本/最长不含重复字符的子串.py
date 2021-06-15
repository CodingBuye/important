'''
请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
'''
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if not s:
            return 0
        length = len(s)
        if length == 1:
            return 1
        max_length = 1
        start = 0
        end = 1

        while end < length:
            if end <= start:
                end += 1
                continue
            #tmp = s[start:end]
            if s[end] in s[start:end]:
                start += 1
            # for index in range(start,end):
            #     if s[index] == s[end]:
            #         start = index+1
            #         break
            else:
                end += 1
                max_length = max(max_length,len(s[start:end]))
            
        return max_length
