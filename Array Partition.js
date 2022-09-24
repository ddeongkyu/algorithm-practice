/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  console.log("nums : ", nums);
  let sum = 0;
  for (let i = 0; i < nums.length; i = i + 2) {
    sum = sum + Math.min(nums[i], nums[i + 1]);
  }
  console.log(`sum : ${sum}`);
  //   return sum;
};

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
