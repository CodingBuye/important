/**
 * https://leetcode-cn.com/leetbook/read/linked-list/jy291/
 */

// 节点结构
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 数据初始化
var MyLinkedList = function() {
    this.head = null;
    this.end = null;
    this.size = 0;
}

// get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.size) return -1;
    let node = this.head;
    while(index-- > 0) {
        if(node.next === null) {
            return -1;
        }
        node = node.next;
    }
    return node.val;
}

// addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new ListNode(val);
    if(this.head === null) {
        this.end = newNode;
    } else {
        newNode.next = this.head;
    }
    this.head = newNode;
    this.size += 1;
    return this.head;
}

// addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new ListNode(val);
    if(this.head === null) {
        this.head = newNode;
    } else {
        this.end.next = newNode;
    }
    this.end = newNode;
    this.size+=1;
    return this.head;
}

/**
 * addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。
 * 如果 index 等于链表的长度，则该节点将附加到链表的末尾。
 * 如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index <= 0) {
        return this.addAtHead(val);
    }
    if(this.size < index) return;
    if(this.size === index) return this.addAtTail(val);
    let p = this.head;
    while(index-- > 1) {
        p = p.next;
    }

    let newNode = new ListNode(val);
    newNode.next = p.next;
    p.next = newNode;
    this.size += 1;
    return this.head;
} 

// deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || this.size === 0 || index > this.size-1) return;
    if(index === 0) {
        let node = this.head;
        this.head = this.head.next;
        this.size-=1;
        return node;
    }

    let p = this.head;
    let counter = index;
    while(index-- > 1) {
        p = p.next;
    }
    if(counter === this.size-1) {
        this.end = p;
    }
    let res = p.next;
    p.next = p.next.next;
    this.size-=1;
    return res;
}


// 测试
var myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);
console.log(myLinkedList.get(1));
console.log(myLinkedList.deleteAtIndex(1));
console.log(myLinkedList.get(1));
