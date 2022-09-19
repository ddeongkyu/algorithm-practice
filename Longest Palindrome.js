/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  s = s.split("");
  let a = new Map();
  let middle = [];
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (!a.has(s[i])) {
      a.set(s[i], 1);
    } else if (a.has(s[i])) {
      a.set(s[i], a.get(s[i]) + 1);
    }
  }
  for (const [key, value] of a) {
    if (value >= 2) {
      if (value % 2 === 0) {
        res = res + value;
      }
      if (value % 2 === 1) {
        res = res + value - 1;
      }
    }
    middle.push(value);
  }
  console.log("middle : ", middle);
  console.log("is odd ? : ");
  if (a.size === 1) {
    return s.length;
  }
  if (middle.map((a) => a !== 1 && a % 2 === 1).includes(true)) {
    res = res + 1;
  }
  if (
    !middle.map((a) => a !== 1 && a % 2 === 1).includes(true) &&
    middle.includes(1)
  ) {
    res = res + 1;
  }
  console.log("size", a.size);
  return res;
};

console.log(longestPalindrome("bananas"));
