/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sSplSort = s.split("").sort();
  const tSplSort = t.split("").sort();
  for (let i = 0; i < sSplSort.length; i++) {
    if (sSplSort[i] !== tSplSort[i]) {
      return false;
    }
  }
  return true;
  //   console.log("S split sort : ", s.split("").sort());
  //   console.log("T split sort", t.split("").sort());
};

console.log(isAnagram("anagram", "naparam"));
