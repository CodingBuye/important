var levelOrder = function(root) {
    if(!root) return [];
    let res = [];
    let levels = [[], []];
    let curr = 0, next = 1;
    levels[curr].push(root);
    let temp = [];
    while(levels[0].length > 0 || levels[1].length > 0) {
        let node = levels[curr].pop();
        temp.push(node.val);

        if(curr === 0) {
            if(node.left !== null) {
                levels[next].push(node.left);
            }

            if(node.right !== null) {
                levels[next].push(node.right);
            }
        } else {
            if(node.right !== null) {
                levels[next].push(node.right);
            }
            if(node.left !== null) {
                levels[next].push(node.left);
            }            
        }

        if(levels[curr].length === 0) {
            res.push([...temp]);
            temp = [];
            curr = 1 - curr;
            next = 1- curr;
        }
    }
    return res;
}