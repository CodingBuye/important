'''
输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。

 

为了让您更好地理解问题，以下面的二叉搜索树为例：

 



 

我们希望将这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。

下图展示了上面的二叉搜索树转化成的链表。“head” 表示指向链表中有最小元素的节点。

 



 

特别地，我们希望可以就地完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中的第一个节点的指针。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof
'''

"""
# Definition for a Node.
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
"""




# class Solution:
#     def treeToDoublyList(self, root: 'Node') -> 'Node':
#         if not root:
#             return root
#         self.prv = None
#         #self.head = None
#         self.listBymid(root)
#         self.prv.right,self.head.left =self.head, self.prv
#         return self.head

    
#     def listBymid(self,root):
#         if not root:
#             return
        
#         self.listBymid(root.left)
        
#         if self.prv:
#             self.prv.right,root.left = root,self.prv
#         else:
#             self.head = root
#         self.prv = root
        
#         self.listBymid(root.right)

class Solution:
    def treeToDoublyList(self, root: 'Node') -> 'Node':
        if not root:
            return root
        
    
        def listBymid(root):
            if not root:
                return []
            left,right = [],[]
            if root.left:
                left = listBymid(root.left)
            root = root
            if root.right:
                right = listBymid(root.right)

            return left + [root] + right

        all_node = listBymid(root)
        length = len(all_node)
        if length == 1:
             all_node[0].left = all_node[0]
             all_node[0].right = all_node[0]
             return all_node[0]

        for node in range(length):
            if node == 0 :
                all_node[node].left = all_node[length-1]
                all_node[node].right = all_node[1]
                #head.right = all_node[node]
            elif node == length - 1:
                all_node[node].left = all_node[node-1]
                all_node[node].right = all_node[0]
            else:

                all_node[node].left = all_node[node-1]
                all_node[node].right = all_node[node+1]
        return all_node[0]

            




        

