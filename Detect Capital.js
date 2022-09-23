/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  const isFirstCapital = word[0].toUpperCase() === word[0];
  // console.log(isFirstCapital)
  if (isFirstCapital) {
    if (word.toUpperCase() === word) {
      // console.log('진짜임ㅋㅋ')
      return true;
    }
    if (word.slice(1).toLowerCase() === word.slice(1)) {
      return true;
      // console.log('zzzzz')
    }
  } else if (!isFirstCapital) {
    if (word.toLowerCase() === word) {
      return true;
      // console.log('hhhhh')
    }
  }
  return false;
};

console.log(detectCapitalUse("asdf"));
