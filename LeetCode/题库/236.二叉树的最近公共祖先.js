var lowestCommonAncestor = function(root, p, q) {
    if(!root || p === root || q === root) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if(left === null) return right;
    if(right === null) return left;
    return root;
}