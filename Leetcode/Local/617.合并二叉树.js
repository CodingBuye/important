/**
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/merge-two-binary-trees
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const mergeTrees = function (t1, t2) {
  if(t1 === null && t2 === null) return null;
  if(t1 === null || t2 === null) return t1 === null ? t2 : t1;
  let root = new TreeNode(t1.val + t2.val);
  root.left = mergeTrees(t1.left, t2.left);
  root.right = mergeTrees(t1.right, t2.right);
  return root;
};
