/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let left = 0;
  let right = 0;
  let leftIdx = 0;
  let rightIdx = mat.length - 1;
  for (let i = 0; i < mat.length; i++) {
    console.log(mat[i]);
    for (let j = 0; j < mat[i].length; j++) {
      left += mat[i][leftIdx];
      console.log("aa : ", mat[i][leftIdx]);
      right += mat[i][rightIdx];
      console.log("bb : ", mat[i][rightIdx]);
      break;
    }
    leftIdx++;
    rightIdx--;
  }
  let sum = left + right;
  if (mat.length % 2 !== 0) {
    console.log("렝쓰 홀수 ㅋㅋ 중간꺼 없애셈");
    sum -= mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)];
  }

  return sum;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);
