function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var lowestCommomAncestor = function(root, p, q) {
    if(!root || p === root || q === root) return root;
    let left = lowestCommomAncestor(root.left, p, q);
    let right = lowestCommomAncestor(root.right, p, q);
    if(!left) return right;
    if(!right) return left;
    return root;
}