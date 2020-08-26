/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if(s === null && t === null) return true;
  if(s === null || t === null) return false;
  return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
}

function isEqual(s, t) {
  if(s === null && t === null) return true;
  if(s === null || t === null) return false;
  if(s.val === t.val) {
    return isEqual(s.left, t.left) && isEqual(s.right, t.right);
  }
  return false;
}