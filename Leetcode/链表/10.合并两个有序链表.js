var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(-1);
    let res = dummy;
    let p = l1, q = l2;
    while(p !== null && q !== null) {
        if(p.val <= q.val){
            res.next = p;
            p = p.next;
        } else {
            res.next = q;
            q = q.next;
        }
        res = res.next;
    }
    if(p !== null) {
        res.next = p;
    }
    if(q !== null) {
        res.next = q;
    }
    return dummy.next;
};