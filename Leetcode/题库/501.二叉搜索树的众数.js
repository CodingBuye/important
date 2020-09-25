function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var findMode = function(root) {
    if(!root) return [];
    let res = [];
    let pre = null;
    let currTimes = 1, maxTimes = 0;
    inOrder(root, pre, currTimes, maxTimes, res);
    return res;
}

function inOrder(root, pre, currTimes, maxTimes, res) {
    if(!root) return;
    inOrder(root.left, pre, currTimes, maxTimes, res);
    if(pre) {
        currTimes = pre.val === root.val ? currTimes+1 : 1;
    }
    if(currTimes === maxTimes) {
        res.push(root.val);
    } else if(currTimes > maxTimes) {
        res = [];
        res.push(root.val);
        maxTimes = currTimes;
    }
    pre = root;
    inOrder(root.right, pre, currTimes, maxTimes, res);
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(2);
node1.right = node2;
node2.left = node3;
console.log(findMode(node1));