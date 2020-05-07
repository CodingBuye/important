/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  let p = head;
  let ans = [];
  while(p !== null) {
      ans.unshift(p.val);
      p = p.next;
  }
  return ans;
};