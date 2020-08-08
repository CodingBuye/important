function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * @param {*} root 
 */
var levelOrder = function(root) {
    if(!root) return [];
    let res = [];
    let queue = [root];
    let curr = 1;  // 当前层要打印的节点数量
    let next = 0;  // 下一层节点的数量
    let temp = []; // 临时存储每一层的节点值
    while(queue.length > 0) {
        let node = queue.shift();
        temp.push(node.val);
        curr-=1;
        if(node.left !== null) {
            next+=1;
            queue.push(node.left);
        }
        if(node.right !== null) {
            next+=1;
            queue.push(node.right);
        }
        if(curr === 0) {
            res.push([...temp]);
            temp = [];
            curr = next;
            next = 0;
        }
    }
    return res;
}

// 测试
let root = new TreeNode(3);
let left = new TreeNode(9);
let right = new TreeNode(20);
let rightLeft = new TreeNode(15);
let rightRight = new TreeNode(7);

root.left = left;
root.right = right;
right.left = rightLeft;
right.right = rightRight;
console.log(levelOrder(root));