/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  //   console.log("row : ", grid.length);
  //   console.log("col : ", grid[1].length);
  //   console.log(grid[0]);
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      //   console.log(grid[i + idx][j]);
      if (grid[i][j] === 1) {
        res += 4;
        if (grid[i + 1] !== undefined && grid[i + 1][j]) {
          res = res - 1;
        }
        if (grid[i - 1] !== undefined && grid[i - 1][j]) {
          res = res - 1;
        }
        if (grid[i][j + 1] === 1) {
          res = res - 1;
        }
        if (grid[i][j - 1] === 1) {
          res = res - 1;
        }
      }
      //   if (isOne && grid[i + idx][j]) {
      //     res = res - 1;
      //   }
    }
  }
  return res;
  // console.log("res : ", res);
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 0],
    [0, 1, 1, 0],
  ])
);
