/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head || head.next === null || head.next.next === null) return head;
    let odd = head, even = head.next, evenHead = head.next;
    while (even && even.next) {
        odd.next = even.next;
        odd = even.next;
        even.next = odd.next;
        even = odd.next;
    }
    odd.next = evenHead;
    return head;
};

