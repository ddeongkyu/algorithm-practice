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

// 첫 시도 말아먹고 노드 뭐 써야된다고 난리치길래 뒤에 4개 다 풀고 왔음//
// var mergeTwoLists = function (list1, list2) {
//   const finalArray = [...list1, ...list2].sort();
//   return finalArray;
// };
// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

var mergeTwoLists1 = function (list1, list2) {
  for (let i = 0; i < list2.length; i++) {
    list1.push(list2[i]);
    console.log("sort 이전 : ", list1);
    list1.sort();
    console.log("sort 이후 : ", list1);
  }
  return console.log("final : ", list1);
};

mergeTwoLists1([1, 2, 4], [1, 3, 4]);
//이것도 안되네 ㅋㅋㅋㅋㅋㅋ 아 진짜 어쩔티비네
//노드 뭐 어쩌라는거지.....
