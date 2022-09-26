/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let res = [];
  for (let i = left; i <= right; i++) {
    let n = String(i);
    let a = n.split("").map((a) => +a);
    console.log(a);
    const pengsoo = a.every((a) => i % a === 0);
    console.log(pengsoo);
    if (pengsoo) {
      res.push(i);
    }
  }
  console.log("res", res);
};

console.log(selfDividingNumbers(1, 22));
