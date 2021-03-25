/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
    if(!head || head.next === null) return head;
    let dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy, curr = head;
    while (curr && curr.next) {
        while (curr.next && curr.next.val === curr.val) {
            curr.next = curr.next.next;
        }
        prev = curr;
        curr = curr.next;
    }
    return dummy.next;
};

let head = new ListNode(1, new ListNode(1, new ListNode(2)));
console.log(deleteDuplicates(head));
