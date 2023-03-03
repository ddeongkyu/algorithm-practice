/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  if (!s.includes("a") && s.includes("b")) {
    return true;
  }
  if (s.includes("a") && !s.includes("b")) {
    return true;
  }
  return s.indexOf("a", s.indexOf("b")) === -1 ? true : false;
};

console.log(checkString("abab"));
console.log(checkString("aaabbb"));
