/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length === 2) {
    return true;
  }
  for (let i = 2; i < coordinates.length; i++) {
    if (
      (coordinates[i - 2][1] - coordinates[i - 1][1]) *
        (coordinates[i - 2][0] - coordinates[i][0]) !==
      (coordinates[i - 2][1] - coordinates[i][1]) *
        (coordinates[i - 2][0] - coordinates[i - 1][0])
    ) {
      return false;
    }
  }
  return true;
};

console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
);

console.log(
  checkStraightLine([
    [0, 0],
    [0, 1],
    [0, -1],
  ])
);
