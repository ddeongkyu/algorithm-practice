/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      res.unshift(nums[i]);
    } else {
      res.push(nums[i]);
    }
  }
  console.log(res);
  return res;

  //   let odd = [],
  //     even = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] % 2 === 0) {
  //       even.push(nums[i]);
  //     } else {
  //       odd.push(nums[i]);
  //     }
  //   }
  // console.log(`odd : ${odd}`)
  // console.log(`even : ${even}`)
  //   return even.concat(odd);
};

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([0]));
