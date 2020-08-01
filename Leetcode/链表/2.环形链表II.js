/**
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * https://leetcode-cn.com/leetbook/read/linked-list/jjhf6/
 */
var detectCycle = function(head) {
    if(!head || head.next === null) return null;
    let slow = head;
    let fast = head.next;
    while(slow !== fast) {
        if(fast === null || fast.next === null) {
            return null;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    slow = slow.next;
    fast = head;
    while(fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};