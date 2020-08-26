var isBalanced = function(root) {
    if(!root) return true;
    return Math.abs(getDepth(root.left)-getDepth(root.right)) <=1 
    && isBalanced(root.left) && isBalanced(root.right);
}

function getDepth(root) {
    if(!root) return 0;
    let left = getDepth(root.left);
    let right = getDepth(root.right);
    return Math.max(left, right) + 1;
}