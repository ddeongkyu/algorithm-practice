/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let beforeA2 = 1;
  let a1 = 1;
  let a2 = 1;
  let res = 0;
  if (n === 1 || n === 2) {
    return 1;
  }
  for (let i = 3; i <= n; i++) {
    res = a1 + a2;
    beforeA2 = a2;
    a2 = res;
    a1 = beforeA2;
  }
  console.log(`res : ${res}`);
};

console.log(fib(7));
