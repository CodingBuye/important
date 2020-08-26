/**
 * https://leetcode-cn.com/leetbook/read/linked-list/jf1cc/
 */

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let p = dummy, q = dummy;
    while(n-- >= 0) {
        p = p.next;
    }
    while(p !== null) {
        p = p.next;
        q = q.next;
    }
    q.next = q.next.next;
    return dummy.next;
};