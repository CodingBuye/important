/**
 * 参考：https://leetcode-cn.com/problems/reverse-linked-list-ii/solution/bu-bu-chai-jie-ru-he-di-gui-di-fan-zhuan-lian-biao/
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var reverseBetween = function(head, m, n) {
    if(!head || head.next === null) return head;
    if(m === 1) {
        return reverseN(head, n);
    }
    head.next = reverseBetween(head.next, m-1, n-1);
    return head;
};

function reverseN(head, n) {
    if(n === 1) {
        return head;
    }
    let newHead = reverseN(head.next, n-1);
    let nex = head.next.next;
    head.next.next = head;
    head.next = nex;
    return newHead;
}
