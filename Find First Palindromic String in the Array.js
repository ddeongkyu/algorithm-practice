/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].split("").join() === words[i].split("").reverse().join()) {
      return words[i];
    }
  }
  return "";
};
console.log(firstPalindrome(["abc", "car", "ada", "rececar", "cool"]));
console.log(firstPalindrome(["lettcode", "rececar"]));
console.log(firstPalindrome(["def", "ghi"]));
