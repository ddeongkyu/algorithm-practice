/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 15 === 0) {
      arr[i] = "FizzBuzz";
    } else if ((i + 1) % 5 === 0) {
      arr[i] = "Buzz";
    } else if ((i + 1) % 3 === 0) {
      arr[i] = "Fizz";
    } else {
      arr[i] = String(i + 1);
    }
  }
  return arr;
};
