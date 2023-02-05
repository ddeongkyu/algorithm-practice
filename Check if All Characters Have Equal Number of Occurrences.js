/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]] += 1;
    }
  }

  return new Set([...Object.values(obj)]).size === 1 ? true : false;
};

console.log(areOccurrencesEqual("aabb"));
