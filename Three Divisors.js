/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  let res = 0;
  let i = 1;
  while (i < n) {
    if (n % i === 0) {
      res++;
    }
    if (res >= 3) {
      return false;
    }
    i++;
  }
  return res + 1 === 3 ? true : false;
  console.log(res);
};

console.log(isThree(20));
console.log(isThree(4));
console.log(isThree(323));
