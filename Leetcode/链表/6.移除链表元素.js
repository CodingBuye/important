var removeElements = function(head, val) {
    if(!head) return null;
    let dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy;
    let curr = head;
    while(curr !== null) {
        let nx = curr.next;
        if(curr.val === val) {
            prev.next = nx;
            curr = nx;
        } else {
            curr = curr.next;
            prev = prev.next;
        }
    }
    return dummy.next;
}