var oddEventList = function(head) {
    if(!head || head.next === null) return head;
    let odd = head, even = head.next, evenHead = evev;
    while(even !== null && even.next !== null) {
        odd.next = even.next;
        odd = even.next;
        even.next = odd.next;
        even = odd.next;
    }
    odd.next = evenHead;
    return head;
}