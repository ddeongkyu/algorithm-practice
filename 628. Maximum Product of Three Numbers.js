/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  if (nums.length === 3) {
    for (let i = 0; i < nums.length; i++) {
      return nums[0] * nums[1] * nums[2];
    }
  }
  let n = nums.length;
  nums = nums.sort((a, b) => a - b);
  console.log(`nums : ${nums}`);
  let back = nums[n - 3] * nums[n - 2] * nums[n - 1];
  let forward = nums[0] * nums[1] * nums[n - 1];
  console.log(`back : ${back}`);
  console.log(`forward : ${forward}`);
  return Math.max(back, forward);
};

console.log(maximumProduct([1, 2, 3, 4]));
console.log(maximumProduct([-100, -99, 3, 2, 8]));
