/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  let arr = ["", "", ""];
  for (let i = 0; i < firstWord.length; i++) {
    arr[0] += String(firstWord[i].charCodeAt() - 97);
  }
  for (let i = 0; i < secondWord.length; i++) {
    arr[1] += String(secondWord[i].charCodeAt() - 97);
  }
  for (let i = 0; i < targetWord.length; i++) {
    arr[2] += String(targetWord[i].charCodeAt() - 97);
  }
  return Number(arr[0]) + Number(arr[1]) === Number(arr[2]);
};
