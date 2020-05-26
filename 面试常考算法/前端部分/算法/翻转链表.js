function ListNode(val) {
	this.val = val;
	this.next = val;
}

var reverseList = function(head) {
	let newHead = null;
	let prev = null;
	let curr = head;
	while(curr !== null) {
		let next = curr.next;
		if(next === null) {
			newHead = curr;
		}
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	return newHead;
}

