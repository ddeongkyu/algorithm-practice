/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const finalArray = [...list1, ...list2].sort();
  return finalArray;
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

// const a = [];
// const b = [0];
// const c = a.concat(b);
// console.log(a.concat(b));
// console.log(c.sort());
