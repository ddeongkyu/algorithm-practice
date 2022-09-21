/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let res = [];
  let i = 0;
  let n = nums.length;
  while (n >= i) {
    if (!nums.includes(n)) {
      res.push(n);
    }
    n--;
  }
  return res.filter((a) => a > 0).sort((a, b) => a - b);
};

console.log(findDisappearedNumbers([1, 1]));
