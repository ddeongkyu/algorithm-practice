/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  t = t.split("").sort();
  s = s.split("").sort();
  //   console.log(t);
  //   console.log(s);
  for (let i = 0; i < t.length; i++) {
    if (t[i] !== s[i]) {
      return t[i];
    }
  }
};

console.log(findTheDifference("abcd", "abcde"));
