/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buyP1 = 0;
  let sellP2 = 1;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[buyP1] > prices[sellP2]) {
      buyP1 = sellP2;
      sellP2++;
    } else {
      let curProfit = prices[sellP2] - prices[buyP1];
      if (curProfit > maxProfit) {
        maxProfit = curProfit;
      }
      sellP2++;
    }
    console.log("buy", buyP1);
    console.log("sell", sellP2);
    console.log("max profit", maxProfit);
  }
  return maxProfit;
};

maxProfit([1, 1, 5, 3, 6, 4]);
