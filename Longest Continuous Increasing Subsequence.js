/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let storage = 0;
  let max = 0;
  let che = new Set([...nums]);
  if (che.size === 1) {
    return 1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!storage || nums[i] > nums[i - 1]) {
      console.log(nums[i]);
      storage++;
    } else {
      max = Math.max(max, storage);
      storage = 1;
    }
  }
  console.log("storage : ", storage);
  console.log("max : ", max);
  return Math.max(storage, max);
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
console.log(findLengthOfLCIS([2, 2, 2, 2, 2, 2, 2, 2]));
