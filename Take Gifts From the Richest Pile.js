/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  let i = 1;
  while (k >= i) {
    //  console.log('while')
    let max = Math.max(...gifts);
    gifts[gifts.indexOf(max)] = Math.floor(Math.sqrt(max));
    i++;
  }
  //   console.log(gifts)
  return gifts.reduce((acc, cur) => acc + cur, 0);
};

console.log(pickGifts([25, 64, 9, 4, 100], 4));
console.log(pickGifts([1, 1, 1, 1], 4));
