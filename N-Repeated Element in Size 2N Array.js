/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }
  let b = Object.entries(obj).filter((a) => a[1] === nums.length / 2);
  return Number(b[0][0]);
};

console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));
