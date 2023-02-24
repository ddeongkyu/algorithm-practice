/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < String(nums[i]).length; j++) {
      res.push(Number(String(nums[i])[j]));
    }
  }
  console.log(res);
  return res;
};

console.log(separateDigits([13, 25, 83, 77]));
console.log(separateDigits([1, 3, 5, 7, 1]));
