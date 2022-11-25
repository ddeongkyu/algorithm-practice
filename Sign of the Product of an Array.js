/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  if (nums.includes(0)) {
    return 0;
  }
  let res = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res *= 1;
    } else {
      res *= -1;
    }
  }
  return res;
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
console.log(arraySign([1, 5, 0, 2, -3]));
console.log(arraySign([-1, 1, -1, 1, -1]));
