/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  if (num < 10) {
    return true;
  }
  const first = String(num).split("").reverse().join("");
  const second = String(Number(first)).split("").reverse().join("");

  return Number(second) === num;
};

console.log(isSameAfterReversals(526));
console.log(isSameAfterReversals(5));
console.log(isSameAfterReversals(1800));
