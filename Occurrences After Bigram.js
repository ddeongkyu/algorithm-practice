/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  console.log(text);
  text = text.split(" ");
  let res = [];
  for (let i = 2; i < text.length; i++) {
    if (text[i - 2] === first && text[i - 1] === second) {
      res.push(text[i]);
    }
  }
  console.log("res : ", res);
};

console.log(findOcurrences("we will we will rock you", "we", "will"));
