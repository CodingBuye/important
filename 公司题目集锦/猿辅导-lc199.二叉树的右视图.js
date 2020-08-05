var rightSideView = function(root) {
    if(!root) return [];
    let queue = [root];
    let curr = 1;
    let nex = 0;
    let temp = [];
    let res = [];
    while(queue.length > 0){
        let node = queue.shift();
        curr -= 1;
        if(node.left !== null) {
            temp.push(node.left);
            nex+=1;
        }
        if(node.right !== null) {
            temp.push(node.right);
            nex+=1;
        }

        if(curr === 0) {
            res.push(node.val);
            queue = [...temp];
            temp = [];
            curr = nex;
            nex = 0;
        }
    }
    return res;
}