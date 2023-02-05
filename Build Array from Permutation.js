/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    res.push(nums[nums[i]]);
  }
  console.log(res);
};

console.log(buildArray([5, 0, 1, 2, 3, 4]));
