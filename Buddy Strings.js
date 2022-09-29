/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  let res = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      res.push(i);
    }
    if (res.length > 2) {
      return false;
    }
  }
  console.log("res : ", res);
  if (!res.length) return s.length !== [...new Set(s)].length;
  return s[res[0]] === goal[res[1]] && goal[res[0]] === s[res[1]];
};

console.log(buddyStrings("abcd", "abcc"));
