/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const b = digits.join("");
  console.log(b);
  const pureNum = BigInt(b) + BigInt(1);
  console.log(pureNum);
  const aa = Array.from(String(pureNum), Number);
  return aa;
};
plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
