/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let firstV = nums[0];
  let lastV = nums[nums.length - 1];
  if (firstV < lastV) {
    console.log("커지는 배열");
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        return false;
      }
    }
  } else if (firstV >= lastV) {
    console.log("작아지는 배열");
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isMonotonic([3, 4, 2, 3]));
