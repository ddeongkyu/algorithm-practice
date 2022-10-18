/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let max = 0;
  for (let i = 0; i < s.length - 1; i++) {
    let ss = s
      .slice(0, i + 1)
      .split("")
      .filter((a) => a === "0").length;
    let dd = s
      .slice(i + 1)
      .split("")
      .filter((a) => a === "1").length;
    console.log("ss : ", ss, typeof ss);
    console.log("dd : ", dd, typeof dd);
    if (Number(ss) + Number(dd) > max) {
      max = Number(ss) + Number(dd);
    }
  }
  console.log("final max : ", max);
  return max;
};

console.log(maxScore("00111"));

console.log(maxScore("00111"));
