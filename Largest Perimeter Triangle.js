/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums = nums.sort((a, b) => b - a);
  console.log("nums : ", nums);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let c = j + 1; c < nums.length; c++) {
        //    console.log(`i : ${i} , j : ${j} , c : ${c}`)
        if (nums[i] < nums[j] + nums[c]) {
          return nums[i] + nums[j] + nums[c];
        }
      }
    }
  }
  return 0;
};

console.log(largestPerimeter([1, 2, 1]));
console.log(largestPerimeter([2, 1, 2]));
