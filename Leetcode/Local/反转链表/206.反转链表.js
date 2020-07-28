/**
 * 非递归解法
 * @param {} head 
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let newHead = null;
    while(curr !== null) {
        let nex = curr.next;
        if(nex === null) {
            newHead = curr;
        }
        curr.next = prev;
        prev = curr;
        curr = nex;
    }
    return newHead;
}

/**
 * 递归解法
 */
var revese = function(head) {
    if(!head || head.next === null) return head;
    let last = revese(head.next);
    head.next.next = head;
    head.next = null;
    return last;
}

/**
 * 参考：https://leetcode-cn.com/problems/reverse-linked-list-ii/solution/bu-bu-chai-jie-ru-he-di-gui-di-fan-zhuan-lian-biao/
 */