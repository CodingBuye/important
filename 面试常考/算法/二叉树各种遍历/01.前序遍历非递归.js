function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var preorderTraversal1 = function(root) {
  if(!root) return [];
  let res = [];
  let p = root;
  let stack = [];
  while(p || stack.length > 0) {
    while(p) {
      res.push(p.val);
      stack.push(p);
      p = p.left;
    }
    p = stack.pop().right;
  }
  return res;
}

var preorderTraversal2 = function(root) {
  if(!root) return [];
  let res = [];
  let stack = [root];
  while(stack.length > 0) {
    let node = stack.pop();
    res.push(node.val);
    if(node.right !== null) {
      stack.push(node.right);
    }
    if(node.left !== null) {
      stack.push(node.left);
    }
  }
  return res;
}

let root = new TreeNode(1);
let node1 = new TreeNode(2);
let node2 = new TreeNode(3);
root.right = node1;
node1.left = node2;
console.log(preorderTraversal2(root));