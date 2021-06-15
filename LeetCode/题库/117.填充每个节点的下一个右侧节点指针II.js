function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}

var connect = function(root) {
    if(!root) return root;
    let curr = 1, next = 0;
    let queue = [root];
    let temp = [];
    while(queue.length > 0) {
        let node = queue.shift();
        temp.push(node);
        curr-=1;
        if(node.left) {
            queue.push(node.left);
            next+=1;
        }
        if(node.right) {
            queue.push(node.right);
            next+=1;
        }
        if(curr === 0) {
            let p = temp.shift();
            while(temp.length) {
                p.next = temp.shift();
                p = p.next;
            }
            p.next = null;
            curr = next;
            next = 0;
        }
    }
    return root;
}