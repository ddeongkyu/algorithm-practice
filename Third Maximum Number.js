/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let res = 0;
  const setted = [...new Set(nums)].sort((a, b) => a - b).reverse();
  console.log(setted);
  if (setted[2] === undefined) {
    res = setted[0];
  } else if (setted[1] === undefined) {
    res = setted[0];
  } else {
    res = setted[2];
  }
  return res;
};

console.log(thirdMax([3, 2, 2, 5, 9, 8, 1, 3, 1]));
