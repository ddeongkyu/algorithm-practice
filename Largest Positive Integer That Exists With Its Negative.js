/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && nums.includes(-nums[i])) {
      return nums[i];
    }
  }
  return -1;
};

console.log(findMaxK([-1, 2, -3, 3]));
console.log(findMaxK([-1, 10, 6, 7, -7, 1]));
console.log(findMaxK([-10, 8, 6, 7, -2, -3]));
