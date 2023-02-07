/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  let oneD = 1;
  let countOne = 1;
  let zeroD = 1;
  let countZer = 1;
  if (s === "1") {
    return true;
  }
  for (let i = 1; i < s.length + 1; i++) {
    if (s[i - 1] === "1" && s[i] === "1") {
      countOne++;
      if (countOne > oneD) {
        oneD++;
      }
    } else if (s[i - 1] === "0" && s[i] === "0") {
      countZer++;
      if (countZer > zeroD) {
        zeroD++;
      }
    } else {
      countOne = 1;
      countZer = 1;
    }
  }
  console.log("one : ", oneD);
  console.log("zero : ", zeroD);
  return oneD > zeroD;
};
console.log(checkZeroOnes("1101"));
console.log(checkZeroOnes("111000"));
console.log(checkZeroOnes("110100010"));
