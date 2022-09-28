/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const vow = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let s = sentence.split(" ");
  let a = "a";
  console.log(s);
  for (let i = 0; i < s.length; i++) {
    if (vow.includes(s[i][0])) {
      s[i] = s[i] + "ma";
    } else if (!vow.includes(s[i][0])) {
      s[i] = s[i].slice(1).concat(s[i][0]) + "ma";
    }
    s[i] = s[i] + a.repeat(i + 1);
  }
  console.log(s);
  return s.join(" ");
};

console.log(toGoatLatin("I speak Goat Latin"));
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"));
