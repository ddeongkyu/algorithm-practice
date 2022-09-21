/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  console.log(num);
  num = num.toString(2);
  console.log(num.toString(2));
  const a = num.split("");
  //  console.log(a)
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "1") {
      a[i] = "0";
    } else if (a[i] === "0") {
      a[i] = "1";
    }
  }
  return parseInt(a.join(""), 2);
};

console.log(findComplement("10110"));
