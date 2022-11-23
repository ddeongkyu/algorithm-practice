/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  let a = n.toString(k);
  let res = 0;
  for (let i = 0; i < a.length; i++) {
    res += Number(a[i]);
  }
  return res;
};

console.log(sumBase(34, 6));
console.log(sumBase(10, 10));
