/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  let a = sentence.split(" ");
  console.log(a);
  for (let i = 0; i < a.length; i++) {
    if (a[i].slice(0, searchWord.length) === searchWord) {
      return i + 1;
    }
  }
  return -1;
};

console.log(isPrefixOfWord("i love eating burger", "burger"));
console.log(isPrefixOfWord("this problem is an easy problem", "pro"));
