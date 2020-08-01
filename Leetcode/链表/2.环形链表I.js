/**
 * 给定一个链表，判断链表中是否有环。
 * https://leetcode-cn.com/leetbook/read/linked-list/jbex5/
 */
var hasCycle = function(head) {
    if(!head || head.next === null) return false;
    let slow = head;
    let fast = head.next;
    while(slow !== fast) {
        if(fast === null || fast.next === null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};