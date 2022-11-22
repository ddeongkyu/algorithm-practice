/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let res = 0;
  for (let i = 0; i < s.length - 2; i++) {
    let subStr = s.substring(i, 3 + i);
    if (new Set(subStr).size === subStr.length) {
      res++;
    }
  }
  return res;
};
console.log(countGoodSubstrings("xyzzaz"));
console.log(countGoodSubstrings("aababcabc"));
