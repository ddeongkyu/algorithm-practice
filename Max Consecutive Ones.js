/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let res = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      res++;
    } else {
      count = Math.max(count, res);
      res = 0;
    }
  }
  res = Math.max(res, count);
  return res;
  console.log(Math.max(res, count));
  console.log(`res : ${res}`);
  console.log(`count : ${count}`);
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
