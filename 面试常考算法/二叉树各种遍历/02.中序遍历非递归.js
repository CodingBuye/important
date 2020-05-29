function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var inorderTraversal = function(root) {
  let res = [];
  let stack = [];
  let p = root;
  while(p !== null || stack.length > 0) {
    while(p !== null) {
      stack.push(p);
      p = p.left;
    }
    p = stack.pop();
    res.push(p.val);
    p = p.right;
  }
  return res;
}

let root = new TreeNode(1);
let node1 = new TreeNode(2);
let node2 = new TreeNode(3);
root.right = node1;
node1.left = node2;
console.log(inorderTraversal(root));