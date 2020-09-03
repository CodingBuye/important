/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root) return [];
    let res = [];
    let path = [];
    dfs(root, path, res);
    return res;
};

function dfs(node, path, res) {
    let isLeaf = node.left === null && node.right === null;
    if(isLeaf) {
        path.push(node.val);
        res.push(path.join("->"));
        return;
    }
    path.push(node.val);
    if(node.left) {
        dfs(node.left, path, res);
        path.pop();
    } 
    if(node.right) {
        dfs(node.right, path, res);
        path.pop();
    }
}