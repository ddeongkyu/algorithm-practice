/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums = nums.sort((a, b) => a - b);
  let idx = 0;
  for (let i = 0; i < k; i++) {
    if (nums[i] < nums[idx]) {
      idx = i;
    }
    if (nums[i] < 0) {
      nums[i] = -nums[i];
    } else {
      nums[idx] = -nums[idx];
    }
  }
  return nums.reduce((a, b) => a + b);
};

console.log(largestSumAfterKNegations([4, 2, 3], 1));
console.log(largestSumAfterKNegations([3, -1, 0, 2], 3));
