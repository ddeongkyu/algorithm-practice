/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums) {
  console.log(nums[0] % 10);
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 === nums[i]) {
      return i;
    }
  }
  return -1;
};

console.log(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(smallestEqual([0, 1, 2]));
console.log(smallestEqual([4, 3, 1, 2]));
