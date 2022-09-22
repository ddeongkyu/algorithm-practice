/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const grace = [
    "qwertyuiopQWERTYUIOP",
    "asdfghjklASDFGHJKL",
    "zxcvbnmZXCVBNM",
  ];
  let res = [];
  for (let i = 0; i < words.length; i++) {
    let hello;
    let penguin = false;
    console.log(words[i]);
    if (grace[0].includes(words[i][0])) {
      hello = 0;
    } else if (grace[1].includes(words[i][0])) {
      hello = 1;
    } else if (grace[2].includes(words[i][0])) {
      hello = 2;
    }
    for (let j = 1; j < words[i].length; j++) {
      console.log("hello ~ : ", hello);
      console.log("words[i][j] : ", words[i][j]);
      if (grace[hello].includes(words[i][j]) === false) {
        penguin = true;
        break;
      }
    }
    if (!penguin) {
      res.push(words[i]);
    }
  }
  console.log("res : ", res);
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
