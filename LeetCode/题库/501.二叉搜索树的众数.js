function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var findMode = function(root) {
    if(!root) return [];
    let res = [];
    let pre = null;
    let currTimes = 1, maxTimes = 0;
    searchBST(root);
    return res;

    function searchBST(cur) {
        if(!cur) return;
        searchBST(cur.left);
        if(pre === null) {
            currTimes = 1;
        } else if(pre.val === cur.val) {
            currTimes += 1;
        } else {
            currTimes = 1;
        }
        pre = cur;
        if(currTimes === maxTimes) {
            res.push(cur.val);
        } else if(currTimes > maxTimes) {
            res = [];
            res.push(cur.val);
            maxTimes = currTimes;
        }
        searchBST(cur.right);
    }
}


let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(2);
node1.right = node2;
node2.left = node3;
console.log(findMode(node1));