// 递归解法
var reverseList = function(head) {
    if(!head || head.next === null) return head;
    let last = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return last;
};

// 非递归解法
var reverseList = function(head) {
    if(!head || head.next === null) return head;
    let prev = null;
    let curr = head;
    let newHead = null;
    while(curr !== null) {
        let nx = curr.next;
        if(nx === null) {
            newHead = curr;
        }
        curr.next = prev;
        prev = curr;
        curr = nx;
    }
    return newHead;
};