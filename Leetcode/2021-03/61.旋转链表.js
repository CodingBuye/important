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
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function (head, k) {
    if(!head || head.next === null) return head;
    let lenOfList = 1;
    let oldTail = head;
    while(oldTail.next) {
        lenOfList++;
        oldTail = oldTail.next;
    }
    oldTail.next = head;

    let move = lenOfList - 1 - k % lenOfList;
    let newTail = head;
    for(let i=0;i<move;i++){
        newTail = newTail.next;
    }
    let newHead = newTail.next;
    newTail.next = null;
    return newHead;
};

let head = new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
                new ListNode(5)))));
console.log(rotateRight(head, 2));
