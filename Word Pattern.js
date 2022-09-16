/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const patternSplit = pattern.split("");
  console.log("pattern split", patternSplit);
  const splited = s.split(" ");
  console.log("zzz", splited);
  if (splited.length !== patternSplit.length) {
    return false;
  }
  let a = {};
  for (let i = 0; i < splited.length; i++) {
    if (!a[pattern[i]]) {
      a[pattern[i]] = splited[i];
    } else if (a[pattern[i]] !== splited[i]) {
      return false;
    }
  }
  console.log("a : ", Object.values(a).length);
  console.log("set : ", new Set([...Object.values(a)]).size);
  return Object.values(a).length === new Set([...Object.values(a)]).size
    ? true
    : false;
};
console.log(wordPattern("jquery", "jquery"));
