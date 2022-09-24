/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const maxCandy = candyType.length / 2;
  const a = new Set([...candyType]);
  console.log(`max candy : ${maxCandy}`);
  console.log(candyType);
  console.log(a);
  return Math.min(maxCandy, a.size);
};

// console.log(distributeCandies([6, 6, 6, 6]));
// console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
console.log(distributeCandies([1, 3, 2, 2, 5, 2, 3, 7]));
