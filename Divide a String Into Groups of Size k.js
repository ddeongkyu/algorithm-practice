/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  let res = [];
  let i = 0;

  while (s.length > i) {
    res.push(s.slice(i, i + k));
    i += k;
  }
  if (res[res.length - 1].length !== k) {
    let num = k - res[res.length - 1].length;
    let str = "";
    for (i = 0; i < num; i++) {
      str += fill;
    }
    res[res.length - 1] += str;
  }
  return res;
};
console.log(divideString("abcdefghij", 3, "x"));
console.log(divideString("abcdefghi", 3, "x"));
