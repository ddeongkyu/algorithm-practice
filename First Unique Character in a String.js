/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const ss = s.split("");
  const a = new Map();
  const res = [];
  for (let i = 0; i < ss.length; i++) {
    if (!a.has(ss[i])) {
      a.set(ss[i], 1);
    } else if (a.has(ss[i])) {
      a.set(ss[i], a.get(ss[i]) + 1);
    }
  }
  for (let [key, value] of a) {
    if (value === 1) {
      res.push(Array(1).fill(key));
    }
  }
  if (!res) {
    return -1;
  }
  return ss.indexOf(res.flatMap((a) => a)[0]);
};
console.log(firstUniqChar("loveleetcode"));
