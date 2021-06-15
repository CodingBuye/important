var isPalindrome = function(head) {
    if(!head || head.next === null) return true;
    let slow = head, fast = head;
    let stack = [];
    while(fast !== null && fast.next !== null) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }

    if(fast !== null) slow = slow.next;
    while(slow !== null) {
        
        if(slow.val !== stack.pop()) {
            return false;
        }
        slow = slow.next;
    }
    return stack.length === 0;
}