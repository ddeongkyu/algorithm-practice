/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  let obj = {};
  let idx = 0;
  for (let i of order) {
    obj[i] = idx;
    idx++;
  }
  for (let i = 0; i < words.length - 1; i++) {
    if (
      words[i].includes(words[i + 1]) &&
      words[i].length > words[i + 1].length
    ) {
      return false;
    }
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] !== words[i + 1][j]) {
        if (obj[words[i + 1][j]] < obj[words[i][j]]) {
          return false;
        } else {
          break;
        }
      }
    }
  }
  return true;
};

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
console.log(
  isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")
);
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"));
