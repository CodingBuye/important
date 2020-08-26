var postorderTraversal = function(root) {
    if(!root) return [];
    let res = [];
    let arr = [root];
    while(arr.length > 0) {
        let node = arr.pop();
        if(node !== null) {
            arr.push(node);
            arr.push(null);
            if(node.right !== null) {
                arr.push(node.right);
            }
            if(node.left !== null) {
                arr.push(node.left);
            }
        } else {
            res.push(arr.pop().val);
        }
    }
    return res;
}