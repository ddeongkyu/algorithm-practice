/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let left = s.toLowerCase().slice(0, s.length / 2);
  let right = s.toLowerCase().slice(s.length / 2);
  let vowels = ["a", "e", "i", "o", "u"];
  console.log(left);
  console.log(right);
  let idx = 0;
  let cur = 0;
  while (idx < s.length / 2) {
    if (vowels.includes(left[idx])) {
      cur++;
    }
    if (vowels.includes(right[idx])) {
      cur--;
    }

    idx++;
  }
  console.log("cur : ", cur);
  return cur === 0;
};

console.log(halvesAreAlike("book"));
console.log(halvesAreAlike("textbook"));
