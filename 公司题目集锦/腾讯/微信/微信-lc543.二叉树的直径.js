/**
 * 给定一棵二叉树，你需要计算它的直径长度。
 * 一棵二叉树的直径长度是任意两个结点路径长度中的最大值。
 * 这条路径可能穿过也可能不穿过根结点。
 */
var diameterOfBinaryTree = function(root) {
    let ans = 0;
    getDepth(root);
    return ans;

    function getDepth(root) {
        if(!root) return 0;
        let left = getDepth(root.left);
        let right = getDepth(root.right);
        ans = Math.max(left+right, ans);
        return Math.max(left, right) + 1;
    }
}