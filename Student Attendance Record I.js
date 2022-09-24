/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let countA = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L" && s[i + 1] === "L" && s[i + 2] === "L") {
      return false;
    }
    if (s[i] === "A") {
      countA++;
      if (countA === 2) {
        return false;
      }
    }
  }
  return true;
};

console.log(checkRecord("PPALLP"));
