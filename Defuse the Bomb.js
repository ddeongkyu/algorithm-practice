/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  let res = new Array(code.length).fill(0);
  if (k > 0) {
    for (let i = 0; i < code.length; i++) {
      let count = 0;
      let j = i + 1;
      while (count < k) {
        if (j === code.length) {
          j = 0;
        }
        res[i] += code[j];
        count++;
        j++;
      }
    }
  }
  if (k < 0) {
    for (var i = 0; i < code.length; i++) {
      let count = 0;
      let j = i - 1;
      while (count > k) {
        if (j === -1) {
          j = code.length - 1;
        }
        res[i] += code[j];
        count = count - 1;
        j--;
      }
    }
  }
  return res;
};

console.log(decrypt([5, 7, 1, 4], 3));
