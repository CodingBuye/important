/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root) return root;
    if(root.val > key) {
        root.left = deleteNode(root.left, key);
    } else if(root.val < key) {
        root.right = deleteNode(root.right, key);
    } else {
        if(root.left === null && root.right === null) {
            root = null;
        } else if(root.right !== null) {
            root.val = successor(root);
            root.right = deleteNode(root.right, root.val);
        } else {
            root.val = presuccessrot(root);
            root.left = deleteNode(root.left, root.val);
        }
    }
    return root;
};

function successor(root) {
    let node = root.right;
    while(node.left) {
        node = node.left;
    }
    return node.val;
}

function presuccessrot(root) {
    let node = root.left;
    while(node.right) {
        node = node.right;
    }
    return node.val;
}