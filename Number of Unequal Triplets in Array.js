/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (
          0 <= i &&
          i < j &&
          j < k &&
          nums[i] !== nums[j] &&
          nums[i] !== nums[k] &&
          nums[j] !== nums[k]
        ) {
          console.log(i, j, k);
          res++;
        }
      }
    }
  }
  return res;
};
console.log(unequalTriplets([4, 4, 2, 4, 3]));
console.log(unequalTriplets([1, 1, 1, 1, 1]));
