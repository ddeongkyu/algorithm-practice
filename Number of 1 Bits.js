/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  const aa = n.toString(2);
  let cc = 0;
  for (let i = 0; i < aa.length; i++) {
    if (aa[i] === "1") {
      cc += 1;
      console.log(cc, "cc");
    }
  }
  return cc;
};
console.log(hammingWeight("00000000000000000000000000001011"));
