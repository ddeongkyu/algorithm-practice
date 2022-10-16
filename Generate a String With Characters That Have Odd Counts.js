/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  if (n % 2 === 0) {
    return new Array(n - 1).fill("o").join("") + "p";
  } else if (n % 2 !== 0) {
    return new Array(n).fill("o").join("");
  }
};

console.log(generateTheString(8));
console.log(generateTheString(150));
console.log(generateTheString(15));
