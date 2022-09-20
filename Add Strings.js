/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let n1 = num1.split("").reverse();
  let n2 = num2.split("").reverse();
  console.log(n1);
  console.log(n2);
  let res = [];
  let el = 0;
  const bigLength = num1.length >= num2.length ? num1.length : num2.length;
  for (let i = 0; i < bigLength; i++) {
    let sumHAHA =
      Number(n1[i] === undefined ? 0 : n1[i]) +
      Number(n2[i] === undefined ? 0 : n2[i]);
    console.log(sumHAHA);
    if (sumHAHA + el >= 10) {
      res.push((sumHAHA - 10 + el).toString());
      el = 1;
      if (i === bigLength - 1) {
        res.push("1");
      }
    } else {
      res.push((sumHAHA + el).toString());
      el = 0;
    }
  }
  return res.reverse().join("").toString();
};

console.log(addStrings("11", "123"));
