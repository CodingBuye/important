var minDepth = function(root) {
    if(!root) return 0;
    if(root.left === null && root.right === null) return 1;
    if(root.left === null || root.right === null) {
        return Math.max(minDepth(root.left), minDepth(root.right)) + 1;
    }
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}