/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  const maxx = Math.max(...nums);
  const minn = Math.min(...nums);
  let res = 1;
  for (let i = 2; i <= Math.min(maxx, minn); i++) {
    if (maxx % i === 0 && minn % i === 0) {
      res = i;
    }
  }
  console.log(res);
};
console.log(findGCD([2, 5, 6, 9, 10]));
