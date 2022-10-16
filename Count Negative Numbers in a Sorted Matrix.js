/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  // ㅍ푸ㄹ이 1
  //   let res = 0;
  //   for (let i = 0; i < grid.length; i++) {
  //     for (let j = 0; j < grid[i].length; j++) {
  //       if (grid[i][j] < 0) {
  //         res++;
  //       }
  //     }
  //   }
  //   return res;

  //풀이 2
  //   let res = 0;
  //   let a = grid.flatMap((a) => a);
  //   for (let i = 0; i < a.length; i++) {
  //     if (a[i] < 0) {
  //       res++;
  //     }
  //   }
  //   return res;
  // 풀이 3
  let res = 0;
  grid.flat().forEach((a) => a < 0 && res++);
  return res;
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
