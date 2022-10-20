/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // SOLUTION 1
  //   let res = 0;
  // for(let i = 0; i < nums.length; i++) {
  //   for(let j = 0; j < nums.length; j++) {
  //     if(i !== j) {
  //       console.log(`i : ${i}, j : ${j}`)
  //       res = Math.max(res, (nums[i] - 1) * (nums[j] -1))
  //     }
  //   }
  // }
  // console.log("res : ", res);
  // return res

  // SOLUTION 2
  nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);
};

console.log(maxProduct([3, 4, 5, 2]));
