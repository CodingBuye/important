'''
### 解题思路
主要使用回溯法，每一个点都有三种情况，分别是占一位，两位，三位。每一层都要处理这三种情况，但是可以酌情剪枝，例如当两位和三位情况下如果首字符串为0是不成立的。并且num+1 * 3应该要大于等于s长度。


给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

有效的 IP 地址正好由四个整数（每个整数位于 0 到 255 之间组成），整数之间用 '.' 分隔。

 

示例:

输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/restore-ip-addresses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

'''
class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        path, res = [], []

        def get_ip(s, num):

            if not s:
                return
            

            if num == 0:
                if int(s) >= 0 and int(s) <= 255:
                    if len(s) >= 2:
                        if s[0] != "0":
                            path.append(s)
                            res.append(".".join(path[:]))
                            path.pop()
                    else:
                        path.append(s)
                        res.append(".".join(path[:]))
                        path.pop()

                return


            path.append(s[0])
            get_ip(s[1:], num - 1)
            path.pop()
            if len(s) >= 2 and s[0] != "0":
                path.append(s[0:2])
                get_ip(s[2:], num - 1)
                path.pop()
            if len(s) >= 3 and s[0] != "0" and int(s[0:3]) >= 0 and int(s[0:3]) <= 255:
                path.append(s[0:3])
                get_ip(s[3:], num - 1)
                path.pop()

        get_ip(s, 3)
        return res
