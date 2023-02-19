/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  let a = sentence.split(" ");
  let b = a[0].split("");
  console.log(b);
  if (a.length === 1) {
    if (b[0] === b[b.length - 1]) {
      return true;
    }
    return false;
  }
  const last = a[a.length - 1].split("");
  if (a[0][0] !== last[last.length - 1]) {
    return false;
  }
  for (let i = 0; i < a.length - 1; i++) {
    let fir = a[i].split("");
    let sec = a[i + 1].split("");
    if (fir[fir.length - 1] !== sec[0]) {
      return false;
    }
  }
  return true;
};

console.log(isCircularSentence("leetcode exercises sound delightful"));
console.log(isCircularSentence("leetCode"));
console.log(isCircularSentence("Leetcode is cool"));
console.log(isCircularSentence("eetcode"));
