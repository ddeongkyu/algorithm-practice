/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let res = [];
  for (let i = 1; i <= n / 2; i++) {
    res.push(i, -i);
  }
  if (n % 2) {
    res.push(0);
  }
  return res;
};

console.log(sumZero(5));
