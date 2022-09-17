/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  while (n > 4) {
    n = n / 4;
  }
  if (n <= 0) {
    return false;
  }
  if (n === 4) {
    return true;
  }

  return n === 1 ? true : false;
};
