/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[i].includes(words[j])) {
        res.push(words[j]);
      }
    }
  }
  let a = new Set(res);
  return [...a];
};

console.log(stringMatching(["mass", "as", "hero", "superhero"]));
console.log(stringMatching(["leetcode", "et", "code"]));
