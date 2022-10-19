/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let max = 1;
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      console.log(`s[i] : ${s[i]}`);
      count++;
      if (max < count) {
        max = count;
      }
    } else {
      count = 1;
    }
  }
  return max;
};

console.log(maxPower("leetcode"));
console.log(maxPower("abbcccddddeeeeedcba"));
