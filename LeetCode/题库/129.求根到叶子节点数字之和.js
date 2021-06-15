/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    if(!root) return 0;
    if(root.left === null && root.right === null) return root.val;
    let path = [];
    let res = [];
    findPath(root, path, ans);
    return ans.reduce((a, b) => a+b,0);
};

function findPath(root, path, ans){
    path.push(root.val);
    let isLeaf = root.left === null && root.right === null;
    if(isLeaf){
        ans.push(Number(path.join("")));
    }

    if(root.left){
        findPath(root.left, path, ans);
    }

    if(root.right) {
        findPath(root.right, path, ans);
    }
}