/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);
  const res = [];
  let index = nums.indexOf(target);
  while (index !== -1) {
    res.push(index);
    index = nums.indexOf(target, index + 1);
  }
  return res;
};

console.log(targetIndices([1, 2, 5, 2, 3], 2));
