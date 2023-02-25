/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let res = new Array(2 * nums.length);
  for (let i = 0; i < res.length; i++) {
    res[i] = nums[i];
    if (i >= nums.length) {
      console.log(i);
      res[i] = nums[i - nums.length];
    }
  }
  console.log(res);
};

console.log(getConcatenation([1, 3, 2, 1]));
console.log(getConcatenation([1, 2, 1]));
