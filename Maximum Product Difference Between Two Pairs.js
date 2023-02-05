/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  // const obj = {};
  // for(let i = 0; i < nums.length; i++) {
  //   if(!obj[nums[i]]) {
  //     obj[nums[i]] = 1
  //   } else {
  //     obj[nums[i]] +=1
  //   }
  // }
  // const bb = Object.entries(obj)
  // console.log(bb)
  const arr = nums.sort((a, b) => b - a);
  console.log(arr);
  return arr[0] * arr[1] - arr[arr.length - 1] * arr[arr.length - 2];
};

console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8]));
