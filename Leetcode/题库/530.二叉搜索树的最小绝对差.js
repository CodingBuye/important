var getMinimumDifference = function(root) {
    if(!root) return -1;
    let p = root;
    let stack = [];
    let pre = Number.MIN_SAFE_INTEGER;
    let minVal = Number.MAX_SAFE_INTEGER;
    while(p || stack.length > 0){
        while(p !== null) {
            stack.push(p);
            p = p.left;
        }
        p = stack.pop();
        let cur = p.val;
        if(curr-pre < minVal) {
            minVal = cur - pre;
        }
        pre = cur;
        p = p.right;
    }
    return minVal;
}