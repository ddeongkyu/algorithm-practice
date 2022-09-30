/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let odd = [];
  let even = [];
  let res = [];
  let oddIdx = 0;
  let evenIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      even.push(nums[i]);
    } else {
      odd.push(nums[i]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      res.push(even[evenIdx]);
      evenIdx++;
    } else {
      res.push(odd[oddIdx]);
      oddIdx++;
    }
  }
  return res;
  console.log(res);
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
