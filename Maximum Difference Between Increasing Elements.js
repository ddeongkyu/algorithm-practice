/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let max = -1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(nums[i], nums[j]);
      if (nums[i] < nums[j] && nums[j] - nums[i] > max) {
        max = nums[j] - nums[i];
      }
    }
  }
  console.log("max", max);
  return max;
};

console.log(maximumDifference([7, 1, 5, 4]));
console.log(maximumDifference([1, 5, 2, 10]));
console.log(maximumDifference([9, 4, 3, 2]));
