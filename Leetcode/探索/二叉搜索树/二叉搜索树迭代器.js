function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var BSTIterator = function(root) {
    this.stack = [];
    this.traverse(root);
}

BSTIterator.prototype.traverse = function(node) {
    while(node) {
        this.stack.push(node);
        node = node.left;
    }
}

BSTIterator.prototype.next = function() {
    if(this.stack.length === 0) return null;
    let temp = this.stack.pop();
    if(temp.right) this.traverse(temp.right);
    return temp.val;
}

BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
}