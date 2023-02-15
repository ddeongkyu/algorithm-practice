/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
  if (cost.length === 2) {
    return cost[0] + cost[1];
  }
  if (cost.length === 1) {
    return cost[0];
  }
  const arr = cost.sort((a, b) => b - a);
  let res = 0;
  while (arr.length > 2) {
    res += arr[0];
    res += arr[1];
    arr.splice(0, 3);
  }
  if (arr.length === 2) {
    res += arr[0];
    res += arr[1];
    return res;
  }
  if (arr.length === 1) {
    res += arr[0];
    return res;
  }
  return res;
};
console.log(minimumCost([6, 5, 7, 9, 2, 2]));
console.log(
  minimumCost([
    25, 98, 48, 25, 25, 23, 52, 37, 16, 95, 16, 30, 32, 79, 68, 47, 83, 68, 13,
    2, 43, 88,
  ])
);
console.log(minimumCost([1, 2, 3]));
