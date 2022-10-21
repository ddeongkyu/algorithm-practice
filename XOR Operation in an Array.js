/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let res = [];
  let i = 0;
  while (i < n) {
    res.push(start);
    start += 2;
    i++;
  }
  console.log(res);
  return res.reduce((acc, cur) => acc ^ cur);
};

console.log(xorOperation(4, 3));

// console.log([3, 5, 7, 9].reduce((acc, cur) => acc ^ cur));
