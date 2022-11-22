/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let res = 0;
  let i = 1;
  let j = 1;
  while (n >= i) {
    res += j;
    // console.log('inner j : ', j)
    // console.log('res : ', res)
    if (i % 7 === 0) {
      j -= 6;
    }
    j++;
    i++;
  }
  return res;
};

console.log(totalMoney(4));
console.log(totalMoney(10));
console.log(totalMoney(20));
