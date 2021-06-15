/**
 * 编写一个程序，找到两个单链表相交的起始节点。
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    let p = headA, q = headB;
    while(p !== q) {
        p = p === null ? headB : p.next;
        q = q === null ? headA : q.next;
    }
    return p;
};