/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  let a = text.split(" ");
  let ans = 0;
  for (let word of a) {
    for (let i = 0; i < word.length; i++) {
      if (brokenLetters.includes(word[i])) {
        ans++;
        break;
      }
    }
  }
  return a.length - ans;
};
console.log(canBeTypedWords("leet code", "e"));
