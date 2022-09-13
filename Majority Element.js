/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const n = Math.floor(nums.length / 2);
  const pengsoo = new Map();
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!pengsoo.has(nums[i])) {
      pengsoo.set(nums[i], 1);
    } else if (pengsoo.has(nums[i])) {
      pengsoo.set(nums[i], pengsoo.get(nums[i]) + 1);
    }
  }
  for (const [key, value] of pengsoo) {
    if (value > n) {
      answer = key;
    }
  }
  return answer;
};

console.log(majorityElement([3, 2, 3, 3, 3]));
