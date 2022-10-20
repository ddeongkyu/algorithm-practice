/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let res = [];
  for (let i = 0; i < prices.length; i++) {
    let newPri = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] >= prices[j]) {
        newPri = prices[i] - prices[j];
        break;
      }
    }
    res.push(newPri);
  }
  return res;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
