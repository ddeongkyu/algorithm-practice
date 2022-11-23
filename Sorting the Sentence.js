/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  let a = s.split(" ").sort((a, b) => a[a.length - 1] - b[b.length - 1]);
  let b = a.map((a) => a.slice(0, a.length - 1));
  // console.log(a)
  // console.log(b)
  return b.join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));
console.log(sortSentence("Myself2 Me1 I4 and3"));
