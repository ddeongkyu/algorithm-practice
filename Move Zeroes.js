/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let middle = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== 0) {
      middle.unshift(nums.splice(i, 1)[0]);
    }
  }
  for (let i = middle.length - 1; i >= 0; i--) {
    nums.unshift(middle[i]);
  }
  // console.log(nums.splice(3, 1))
  // console.log('nums : ', nums)
  console.log(middle);
  console.log(nums);
};

console.log(moveZeroes([0, 1, 0, 3, 12, 0]));
