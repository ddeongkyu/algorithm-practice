/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let x = nums.slice(0, n);
  let y = nums.slice(n);
  let res = [];
  let i = 0;
  while (i < x.length) {
    res.push(x[i]);
    res.push(y[i]);
    i++;
  }
  return res;
};
console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
