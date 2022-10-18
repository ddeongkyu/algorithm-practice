/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let res = [];
  let storage = 0;
  let ss = [...candies];
  let i = 0;
  while (i < candies.length) {
    storage = ss[i];
    ss[i] += extraCandies;
    if (Math.max(...ss) === storage + extraCandies) {
      res.push(true);
    } else {
      res.push(false);
    }
    ss[i] = storage;
    storage = 0;
    i++;
  }
  return res;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
