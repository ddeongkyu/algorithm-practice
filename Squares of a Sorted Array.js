/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    res.push(nums[i] * nums[i]);
  }
  return res.sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
