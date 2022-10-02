/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  // return String(Number(num.join("")) + k).split("")

  //   let sum = k;
  //   let ans = [];
  //   let i = num.length - 1;
  //   for (; i >= 0 || sum > 0; i--) {
  //     if (i >= 0) {
  //       sum += num[i];
  //     }
  //     ans.push(sum % 10);
  //     sum = Math.floor(sum / 10);
  //   }
  //   return ans.reverse();

  return (BigInt(num.join("")) + BigInt(k)).toString().split("");
};

console.log(addToArrayForm([1, 2, 0, 0], 301));
