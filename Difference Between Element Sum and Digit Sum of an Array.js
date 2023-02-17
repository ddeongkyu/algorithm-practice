/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let all = nums.reduce((acc, cur) => acc + cur);
  console.log(all);
  let digit = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < String(nums[i]).length; j++) {
      digit += Number(String(nums[i])[j]);
    }
  }
  return Math.abs(all - digit);
};

console.log(differenceOfSum([1, 15, 6, 3]));
console.log(differenceOfSum([1, 2, 3, 4]));
