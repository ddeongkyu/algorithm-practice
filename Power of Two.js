/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  console.log(Math.log2(n));
  return Number.isInteger(Math.log2(n));
};

console.log(isPowerOfTwo(536870912));

// console.log(2 ** 29);
