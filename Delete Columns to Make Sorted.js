/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let res = 0;
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] < strs[j - 1][i]) {
        console.log(
          `strs[j][i] : ${strs[j][i]} , strs[j-1][i] : ${strs[j - 1][i]}`
        );
        res++;
        break;
      }
    }
  }
  console.log(res);
};

console.log(minDeletionSize(["cba", "daf", "ghi"]));
