/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let arr = [];
  let start = 0;
  let idx = 0;
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
  console.log(idx);
  console.log(`start : ${start}`);
  console.log(arr);
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
