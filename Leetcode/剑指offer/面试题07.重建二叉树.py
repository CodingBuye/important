'''
https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
已知二叉树前中序遍历，重构二叉树。python3-递归法
'''
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        if not preorder or not inorder:
            return False
        root = TreeNode(preorder[0])

        inleft = inright = preleft = preright =  []
        tree_len = len(inorder)
        for node in range(tree_len):
            if inorder[node] == preorder[0]:
                inleft = inorder[0:node]
                inright = inorder[node+1:tree_len]
                left_len = len(inleft)
                preleft = preorder[1:left_len+1]
                preright = preorder[left_len+1:]
        
        if inleft:
            root.left = self.buildTree(preleft,inleft)
        if inright:
            root.right = self.buildTree(preright,inright)
        return root
