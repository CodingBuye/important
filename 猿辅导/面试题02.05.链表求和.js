/**
 * 给定两个用链表表示的整数，每个节点包含一个数位。
 * 这些数位是反向存放的，也就是个位排在链表首部。
 * 编写函数对这两个整数求和，并用链表形式返回结果。
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    if(l1 === null && l2 === null) return null;
    if(l1 === null || l2 === null) return l1 === null ? l2 : l1;
    let dummy = new ListNode(-1);
    let p = dummy;
    let carry = 0;
    while(l1 !== null || l2 !== null) {
        let a = l1 === null ? 0 : l1.val;
        let b = l2 === null ? 0 : l2.val;
        let sum = l1.val + l2.val + carry;
        p.next = new ListNode(sum % 10);
        carry = parseInt(sum/10);
        p = p.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    if(carry) {
        p.next = new ListNode(carry);
    }
    return dummy.next;
}