function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var postorderTraversal = function(root) {
  let res = [];
  let stack = [];
  let set = new Set();
  let p = root;
  while(p !== null || stack.length > 0) {
    while(p !== null && !set.has(p)) {
      stack.push(p);
      p = p.left;
    }
    p = stack[stack.length-1];
    if(p.right === null || set.has(p)) {
      res.push(p.val);
      set.add(p);
      stack.pop();
      if(stack.length === 0) {
        return res;
      }
      p = stack[stack.length-1];
      p = p.right;
    } else {
      set.add(p);
      p = p.right;
    }
  }
  return res;
}

let root = new TreeNode(1);
let node1 = new TreeNode(2);
let node2 = new TreeNode(3);
root.right = node1;
node1.left = node2;
console.log(postorderTraversal(root));