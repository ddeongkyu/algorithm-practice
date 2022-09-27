/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let max = Math.max.apply(null, nums);
  console.log(`max : ${max}`);
  let maxIndex = nums.indexOf(Math.max.apply(null, nums));
  console.log(`max index : ${maxIndex}`);
  for (let i = 0; i < nums.length; i++) {
    if (i !== maxIndex) {
      if (nums[i] * 2 > max) {
        return -1;
      }
    }
  }
  return maxIndex;
};

console.log(dominantIndex([1, 2, 3, 4]));
