/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let res = [];
  for (let i = 0; i < sentences.length; i++) {
    res.push(sentences[i].split(" ").length);
  }
  return Math.max(...res);
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
console.log(
  mostWordsFound(["please wait", "continue to fight", "continue to win"])
);
