/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let res = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        // console.log(nums[j])
        count++;
      }
    }
    res.push(count);
    count = 0;
  }
  return res;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
