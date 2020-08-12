var isValidBST = function(root) {
    return check(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function check(root, min, max) {
    if(!root) return true;
    let val = root.val;
    if(val <= min || val >= max) return false;
    return check(root.left, min, val) && check(root.left, val, max);
}