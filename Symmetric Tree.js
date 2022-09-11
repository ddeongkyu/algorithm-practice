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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  console.log("root right : ", root.right, typeof root.right);
  console.log("root left : ", root.left, typeof root.left);
  return checkMirror(root.right, root.left);
  // if(!root.left && !root.right) {return true};
  // if(!root.left || !root.right) {return false};
  // const aa =[[root.left, root.right]]
  // console.log(aa)
  // if(root.right.val === root.left.val && isSymmetric(root.right) === isSymmetric(root.left))
  //      {
  //          console.log(isSymmetric(root.right))
  //          return true + console.log('재귀재귀')
  //      }
  // return false;
};
function checkMirror(left, right) {
  console.log("mirror left : ", left);
  console.log("mirror right : ", right);
  if (!left && !right) return true;
  if ((!left && right) || (left && !right) || left.val !== right.val)
    return false;
  console.log(
    "mirror return : ",
    checkMirror(left.left, right.right) && checkMirror(left.right, right.left)
  );

  return (
    checkMirror(left.left, right.right) && checkMirror(left.right, right.left)
  );
}
