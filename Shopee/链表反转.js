/**
 * https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var reverseList = function(head) {
    if(!head || head.next === null) return head;
    let prev = null;
    let curr = head;
    let newHead = null;
    while(curr !== null) {
        let nex = curr.next;
        if(nex === null) {
            newHead = curr;
        }
        curr.next = prev;
        prev = curr;
        curr = nex;
    }
    return newHead;
}

let n1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(3);
let n4 = new ListNode(4);
let n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
console.log(reverseList(n1));