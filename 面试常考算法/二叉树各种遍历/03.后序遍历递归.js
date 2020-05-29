function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var postorderTraversal = function(root) {
  if(!root) return [];
  let res = [];
  res = res.concat(postorderTraversal(root.left));
  res = res.concat(postorderTraversal(root.right));
  res.push(root.val);
  return res;
}

let root = new TreeNode(1);
let node1 = new TreeNode(2);
let node2 = new TreeNode(3);
root.right = node1;
node1.left = node2;
console.log(postorderTraversal(root));