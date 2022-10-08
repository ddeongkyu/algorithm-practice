/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 1;
  }
  let ans = 0;
  let fir = 0;
  let sec = 1;
  let thir = 1;
  let stoSec = 1;
  let stoThir = 1;
  for (let i = 3; i <= n; i++) {
    ans = fir + sec + thir;
    stoSec = sec;
    stoThir = thir;
    fir = stoSec;
    sec = stoThir;
    thir = ans;
  }
  return ans;
};

console.log(tribonacci(5));
