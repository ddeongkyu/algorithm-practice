/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  const [a, b] = points[0];
  const [c, d] = points[1];
  const [e, f] = points[2];
  if (a === c && a === e) {
    return false;
  }
  if (b === d && d === f) {
    return false;
  }
  if ((a === c && b === d) || (a === e && b === f) || (c === e && d === f)) {
    return false;
  }
  if ((d - b) / (c - a) === (f - d) / (e - c)) {
    return false;
  }
  return true;
};

console.log(
  isBoomerang([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
);
