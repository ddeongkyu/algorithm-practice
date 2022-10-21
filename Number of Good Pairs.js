/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        count++;
        console.log(`nums[i] : ${nums[i]}, nums[j] : ${nums[j]}`);
      }
    }
  }
  return count;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]));
console.log(numIdenticalPairs([1, 2, 3]));
