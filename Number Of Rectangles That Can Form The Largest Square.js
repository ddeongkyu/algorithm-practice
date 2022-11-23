/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let square = rectangles;
  let a = square.map((a) => Math.min(a[0], a[1]));
  let maxx = Math.max(...a);
  let res = 0;
  a.map((a) => a === maxx && res++);
  return res;
};

console.log(
  countGoodRectangles([
    [5, 8],
    [3, 9],
    [5, 12],
    [16, 5],
  ])
);
console.log(
  countGoodRectangles([
    [2, 3],
    [3, 7],
    [4, 3],
    [3, 7],
  ])
);
