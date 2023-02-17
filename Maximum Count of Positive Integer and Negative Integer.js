/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  const arr = [...nums].sort((a, b) => a - b);
  console.log(arr);
  let left = 0;
  let right = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      right++;
    } else if (arr[i] < 0) {
      left++;
    }
  }
  return Math.max(left, right);
};

console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));
console.log(maximumCount([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
