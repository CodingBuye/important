/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if(preorder.length === 0 || inorder.length === 0 || (preorder.length !== inorder.length)) {
    return null;
  }
  let rootVal = preorder[0];
  let index = inorder.indexOf(rootVal);
  let root = new TreeNode(rootVal);
  root.left = buildTree(preorder.slice(1, index+1), inorder.slice(0, index));
  root.right = buildTree(preorder.slice(index+1), inorder.slice(index+1))
  return root;
};