/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = 0;
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    console.log(`sum : ${sum}, and i : ${i}`);
    res.push(sum);
  }
  return res;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));
