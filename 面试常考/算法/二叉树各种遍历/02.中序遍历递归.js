function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var inorderTraversal = function(root) {
  if(!root) return [];
  let res = [];
  res = res.concat(inorderTraversal(root.left));
  res.push(root.val);
  res = res.concat(inorderTraversal(root.right));
  return res;
}

let root = new TreeNode(1);
let node1 = new TreeNode(2);
let node2 = new TreeNode(3);
root.right = node1;
node1.left = node2;
console.log(inorderTraversal(root));