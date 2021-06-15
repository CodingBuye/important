function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const sumOfLeftLeaves = function(root) {
    if(!root) return 0;
    let sum = 0;
    let queue = [root];
    while(queue.length) {
        let p = queue.shift();
        if(p.left) {
            let isLeaf = !p.left.left && !p.left.right;
            queue.push(p.left);
            sum += isLeaf ? p.left.val : 0;
        }
        if(p.right) queue.push(p.right);
    }
    return sum;
}