/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  if (n === 1) {
    return 1;
  }
  let count = 1;
  let i = 1;
  while (n >= i) {
    //      console.log(i)
    i = i + 1 + count;
    count++;
  }
  console.log("count : ", count);
  return count - 1;
};

console.log(arrangeCoins(8));
