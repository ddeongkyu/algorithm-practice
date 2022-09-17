/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  console.log("n : ", n);
  while (n > 3) {
    n = n / 3;
  }
  if (n <= 0) {
    return false;
  }
  if (n === 3) {
    return true;
  }

  return n === 1 ? true : false;
};

console.log(isPowerOfThree(27));
