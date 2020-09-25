function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var buildTree = function(inorder, postorder) {
    if((!inorder || !postorder) || inorder.length === 0 || postorder.length === 0 || inorder.length !== postorder.length) return null;
    let rootVal = postorder[postorder.length-1];
    let root = new TreeNode(rootVal);
    let rootIndex = inorder.indexOf(rootVal);
    root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex));
    root.right = buildTree(inorder.slice(rootIndex+1), postorder.slice(rootIndex, -1));
    return root;
}

console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]));
