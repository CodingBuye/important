function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var BSTIterator = function(root) {
    this.stack = [];
    this.leftInorder(root);
}

BSTIterator.prototype.leftInorder = function(root) {
    while(root) {
        this.stack.push(root);
        root = root.left;
    }
}

BSTIterator.prototype.next = function(root) {
    let temp = this.stack.pop();
    if(temp.right) {
        this.leftInorder(root);
    }
    return temp.val;
}

BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
}