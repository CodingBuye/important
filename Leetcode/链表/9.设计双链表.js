function ListNode(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
}

var MyLinkedList = function() {
    this.head = null;
    this.end = null;
    this.size = 0
}

MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.size) return -1;
    let p = this.head;
    while(index-- > 0) {
        if(p === null) return -1;
        p = p.next;
    }
    return p.val;
}

MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new ListNode(val);
    if(this.head === null) {
        this.end = newNode;
    } else {
        newHead.next = this.head;
        this.head.prev = newHead;
    }
    this.head = newHead;
    this.size += 1;
    return this.head;
}

MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new ListNode(val);
    if(this.head === null) {
        this.head = newNode;
    } else {
        this.end.next = newNode;
        newNode.prev  = this.end;
    }
    this.end = newNode;
    this.size += 1;
    return this.head;
}

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index <= 0) return this.addAtHead(val);
    if(index === this.size) this.addAtTail(val);
    if(index > this.size) return;
    let p = this.head;
    let newNode = new ListNode(val);
    while(index-- > 1) {
        p = p.next;
    }
    newNode.next = p.next;
    p.next.prev = newNode;
    p.next = newNode;
    newNode.prev = p;
    this.size += 1;
    return this.head;
}

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size) return;
    let p = this.head;
    let counter = index;
    while(index-- > 1) {
        p = p.next;
    }
    if(counter === this.size - 1) {
        this.end = p;
    }
    let temp = p.next;
    p.next = temp.next;
    temp.next.prev = p;
    this.size += 1;
    return temp;
}