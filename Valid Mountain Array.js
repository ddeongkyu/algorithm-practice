/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }
  let highIdx = arr.indexOf(Math.max(...arr));
  let right = [...arr].slice(highIdx);
  let left = [...arr].slice(0, highIdx + 1);
  console.log("right : ", right);
  console.log("left : ", left);
  if (right.length === 1 || left.length === 1) {
    return false;
  }
  for (let i = right.length - 1; i >= 0; i--) {
    console.log(right[i - 1], right[i]);
    if (right[i - 1] <= right[i]) {
      return false;
    }
  }
  for (let i = 0; i < left.length; i++) {
    if (left[i] >= left[i + 1]) {
      return false;
    }
  }
  return true;
};

console.log(validMountainArray([1, 1, 1, 1, 1, 1, 1, 2, 1]));
