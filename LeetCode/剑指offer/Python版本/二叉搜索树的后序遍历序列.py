'''
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。
https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
'''
class Solution:
    def verifyPostorder(self, postorder: List[int]) -> bool:
        '''
        如果为空或者长度为1表示是后续遍历
        '''
        if not postorder:
            return True
        length = len(postorder)
        if length == 1:
            return True

        '''
        判断左右子树，找到大于等于root的点，前面均为左子树，后面均为右子树。
        极端情况为递增或者递减，用flag标识递减，即只有右子树
        '''
        root = postorder[-1]
        flag = -1
        for x in range(length):
            if postorder[x] >= root:
                flag = x
                break
        if flag == -1:
            left,right =[], postorder[0:length-1]
        else:
            left,right = postorder[0:flag],postorder[flag:length-1]
        # 如果右子树最小值比root大，返回False
        if right and min(right) < root:
            return False
        #判断左右子树是否为后续遍历
        if not self.verifyPostorder(left):
            return False
        if  self.verifyPostorder(right):
            return True
        return False
