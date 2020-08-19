/**
 * https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var sortedListToBST = function(head) {
    if(head === null) return null;
    let mid = findMidElement(head);
    let root = new TreeNode(mid.val);
    if(mid === head) return root;
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(mid.next);
    return root;
}

function findMidElement(root) {
    let prev = null;
    let slow = root;
    let fast = root;
    while(fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    if(prev !== null) {
        prev.next = null;
    }
    return slow;
}
