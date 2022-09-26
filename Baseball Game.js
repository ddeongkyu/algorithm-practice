/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let o = operations;
  let res = [];
  let double = 0;
  let sum = 0;
  for (let i = 0; i < o.length; i++) {
    if (o[i] === "C") {
      res.pop();
    } else if (o[i] === "D") {
      double = res[res.length - 1] * 2;
      res.push(double);
      double = 0;
    } else if (o[i] === "+") {
      sum = res[res.length - 1] + res[res.length - 2];
      res.push(sum);
      sum = 0;
    } else {
      res.push(Number(o[i]));
    }
    console.log("inner res : ", res);
  }
  console.log("res ", res);

  return !res.length
    ? 0
    : res.reduce((acc, cur) => {
        return acc + cur;
      });
};

console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
