/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  if (!word.includes(ch)) {
    return word;
  }
  const first = word.slice(0, word.indexOf(ch) + 1);
  const second = word.slice(word.indexOf(ch) + 1, word.length);
  return first.split("").reverse().join("") + second;
};
console.log(reversePrefix("xyxzxe", "z"));
console.log(reversePrefix("abcdefd", "d"));
