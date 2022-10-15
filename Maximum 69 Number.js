/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let aa = num.toString().split("");
  for (let i = 0; i < aa.length; i++) {
    if (aa[i] === "6") {
      aa[i] = "9";
      break;
    }
  }
  return Number(aa.join(""));
};

console.log(maximum69Number(9669));
