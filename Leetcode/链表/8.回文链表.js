var isPalindrome = function(head) {
    if(!head || head.next === null) return true;
    let slow = head;
    let fast = head;
    let stack = [];
    while(fast.next && fast.next.next) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }
    if(fast.next !== null) {
        slow.push(slow.val);
    }
    while(slow.next !== null) {
        slow = slow.next;
        if(slow.val !== stack.pop()) {
            return false;
        }
    }
    return true;
}