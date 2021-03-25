/**
 * Definition for singly-linked list.
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
    while (curr !== null && curr.next !== null) {
        let flag = false;
        while (curr.next && curr.next.val === curr.val) {
            curr.next = curr.next.next;
            flag = true;
        }
        if(flag){
            prev.next = curr.next;
            curr = curr.next;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    return dummy.next;
};

let head = new ListNode(1);
let node1 = new ListNode(2);
let node2 = new ListNode(3);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(4);
let node6 = new ListNode(5);

head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
console.log(deleteDuplicates(head));
