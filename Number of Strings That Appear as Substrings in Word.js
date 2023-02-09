/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  let res = 0;
  for (let i = 0; i < patterns.length; i++) {
    if (word.includes(patterns[i])) {
      res++;
    }
  }
  return res;
};

console.log(numOfStrings(["a", "abc", "bc", "d"], "abc"));
console.log(numOfStrings(["a", "b", "c"], "aaaaabbbbbb"));
console.log(numOfStrings(["a", "a", "a"], "ab"));
