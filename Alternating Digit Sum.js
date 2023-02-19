/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  const aa = String(n).split("");
  console.log(aa);
  let res = 0;
  for (let i = 0; i < aa.length; i++) {
    if (i % 2 === 0) {
      res += Number(aa[i]);
    } else {
      res -= Number(aa[i]);
    }
  }
  console.log(res);
};

console.log(alternateDigitSum(521));
console.log(alternateDigitSum(886996));
console.log(alternateDigitSum(111));
