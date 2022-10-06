/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => a - b);
  while (stones.length > 1) {
    console.log(`stones : ${stones}`);
    if (stones[stones.length - 1] === stones[stones.length - 2]) {
      stones.length = stones.length - 2;
    } else {
      stones[stones.length - 2] =
        stones[stones.length - 1] - stones[stones.length - 2];
      stones.length--;
      stones.sort((a, b) => a - b);
    }
  }
  return !stones.length ? 0 : stones[0];
  console.log("stones : ", stones);
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
