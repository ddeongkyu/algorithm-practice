/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let whatEverTv = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = "_";
      whatEverTv++;
    }
  }
  nums.sort();

  return Math.abs(whatEverTv - nums.length);
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
