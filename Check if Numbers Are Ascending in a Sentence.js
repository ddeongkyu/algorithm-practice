/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  const a = s
    .split(" ")
    .map((a) => Number(a))
    .filter((content) => !isNaN(content));
  console.log(a);
  let i = 1;
  while (i < a.length) {
    if (a[i - 1] - a[i] < 0) {
      i++;
    } else {
      return false;
    }
  }
  return true;
};
console.log(
  areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")
);
console.log(
  areNumbersAscending(
    "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"
  )
);
console.log(areNumbersAscending("hello world 5 x 5"));
