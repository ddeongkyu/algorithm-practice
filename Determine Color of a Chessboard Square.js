/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  let a = coordinates[0].charCodeAt();
  let b = Number(coordinates[1]);
  return a % 2 === 0 && b % 2 === 0
    ? false
    : a % 2 !== 0 && b % 2 !== 0
    ? false
    : true;
};

console.log(squareIsWhite("a1"));
console.log(squareIsWhite("h3"));
console.log(squareIsWhite("c7"));
