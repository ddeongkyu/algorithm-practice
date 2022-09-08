/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return [];
  let left = root.left ? inorderTraversal(root.left) : [];
  let right = root.right ? inorderTraversal(root.right) : [];
  let result = [...left, root.val, ...right];
  return result;
};
inorderTraversal([1, null, 2, 3]);
