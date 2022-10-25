/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  // SOLUTION 1
  // return word1.join("")=== word2.join("")
  // SOLUTION 2
  let fir = "";
  let sec = "";
  for (let i = 0; i < word1.length; i++) {
    fir += word1[i];
  }
  for (let i = 0; i < word2.length; i++) {
    sec += word2[i];
  }
  return fir === sec;
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]));
