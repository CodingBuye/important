function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

var addTwoNumbers = function(l1, l2) {
    if(!l1 || !l2) return l1 ? l1 : l2;
    let p = l1, q = l2;
    let sum = 0;
    let carry = 0;
    let dummy = new ListNode(-1);
    let r = dummy;
    while(p || q) {
        let a = p === null ? 0 : p.val;
        let b = q === null ? 0 : q.val;
        sum += a + b + carry;
        r.next = new ListNode(sum % 10);
        carry = parseInt(sum/10);
        sum = 0;
        r = r.next;
        p = p ? p.next : null;
        q = q ? q.next : null;
    }
    if(carry !== 0) r.next = new ListNode(carry);
    return dummy.next;
}
