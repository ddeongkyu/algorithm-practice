/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let res = 0;
  let curr = 0;

  for (let i = 0; i < nums.length; i++) {
    if (curr + nums[i] < 1) {
      res += -(curr + nums[i]) + 1;
      curr = 1;
    } else {
      curr += nums[i];
    }
  }
  console.log(res);
  return res || 1;
};

console.log(minStartValue([-3, 2, -3, 4, 2]));
