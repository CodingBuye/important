function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var pathSum = function(root, sum) {
    if(!root) return [];
    let res = [];
    let path = [];
    let currentSum = 0;
    dfs(root, currentSum, sum, path, res);
    return res;
}

function dfs(root, currentSum, sum, path, res) {
    currentSum += root.val;
    path.push(root.val);
    let isLeaf = root.left === null && root.right === null;
    if(currentSum === sum && isLeaf) {
        res.push([...path]);
    }
    if(root.left) {
        dfs(root.left, currentSum, sum, path, res);
    }
    if(root.right) {
        dfs(root.right, currentSum, sum, path, res);
    }
    path.pop();
}

let node1 = new TreeNode(5);
let node2 = new TreeNode(4);
let node3 = new TreeNode(8);
let node4 = new TreeNode(11);
let node5 = new TreeNode(13);
let node6 = new TreeNode(4);
let node7 = new TreeNode(7);
let node8 = new TreeNode(2);
let node9 = new TreeNode(5);
let node10 = new TreeNode(1);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node3.left = node5;
node3.right = node6;
node4.left = node7;
node4.right = node8;
node6.left = node9;
node6.right = node10;
console.log(pathSum(node1));