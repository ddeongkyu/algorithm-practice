/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let s = paragraph;
  s = s
    .toLowerCase()
    .replace(/[!?',;\.]/g, " ")
    .trim()
    .split(/\s+/g);
  let obj = {};
  for (let i of s) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }
  console.log("obj : ", obj);
  console.log(Object.keys(obj), "asdf");
  return Object.keys(obj)
    .sort((a, b) => {
      return obj[b] - obj[a];
    })
    .filter((word) => !banned.includes(word))[0];
};

console.log(
  mostCommonWord("..Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ])
);
