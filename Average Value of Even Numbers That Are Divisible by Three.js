/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && nums[i] % 3 === 0) {
      res.push(nums[i]);
    }
  }
  if (res.length === 0) {
    return 0;
  }
  return Math.floor(res.reduce((acc, cur) => acc + cur) / res.length);
};

console.log(averageValue([1, 3, 6, 10, 12, 15]));
console.log(
  averageValue([
    94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85, 20, 79, 25, 89, 55, 67, 84,
    3, 79, 38, 16, 44, 2, 54, 58, 94, 69, 71, 14, 24, 13, 21,
  ])
);
console.log(averageValue([1, 2, 4, 7, 10]));
