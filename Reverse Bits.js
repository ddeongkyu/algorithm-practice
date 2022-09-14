/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  const cc = n.toString(2).split("");
  console.log(cc, "cc");
  const dd = cc.reverse();
  const ee = BigInt(dd.join(""));
  console.log("ee : ", ee);
  const ff = BigInt(ee.toString());
  console.log("ff : ", ff, typeof ff);
  const gg = parseInt(ff, 2);
  console.log("gg : ", gg);
  return gg;
};

console.log(reverseBits("00000010100101000001111010011100"));
