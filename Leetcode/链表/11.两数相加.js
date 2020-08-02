var addTwoNumbers = function(l1, l2) {
    if(!l1 && !l2) return null;
    if(!l1 || !l2) return l2 === null ? l1:l2;
    let dummy = new ListNode(-1);
    let ans = dummy;
    let p = l1, q = l2;
    let carry = 0;
    while(p || q) {
        let a = p === null ? 0 : p.val;
        let b = q === null ? 0 : q.val;
        let sum = a + b + carry;
        ans.next = new ListNode(sum%10);
        carry = parseInt(sum/10);
        ans = ans.next;
        p = p === null ? null : p.next;
        q = q === null ? null : q.next;
    }
    if(carry) ans.next = new ListNode(carry);
    return dummy.next;
};