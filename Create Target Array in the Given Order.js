/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let t = [];
  for (let i = 0; i < nums.length; i++) {
    console.log("target: ", t);
    t.splice(index[i], 0, nums[i]);
  }
  console.log("target: ", t);
  return t;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
