/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let arr = [];
  let start = nums[0];
  let idx;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] === nums[i] + 1) {
      idx = nums[i + 1];
    } else if (idx > start) {
      arr.push(`${start}->${idx}`);
      start = nums[i + 1];
    } else {
      arr.push(`${start}`);
      start = nums[i + 1];
    }
  }
  console.log(arr);
};

console.log(summaryRanges([-1]));
