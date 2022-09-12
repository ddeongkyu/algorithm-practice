/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [];
  if (numRows === 1) {
    result = [[1]];
  }
  if (numRows === 2) {
    result = [[1], [1, 1]];
  }
  if (numRows > 2) {
    result = [[1], [1, 1]];
    for (let i = 3; i < numRows + 1; i++) {
      console.log("i : ", i);
      let middle = [];
      for (let j = 0; j <= i - 3; j++) {
        console.log("j : ", j);
        //  middle.push(result[i - 2][i - 3] + result[i - 2][i - 2]);
        middle.push(result[i - 2][j] + result[i - 2][j + 1]);
        // console.log("... : ", result[i - 2][i - 3] + result[i - 2][i - 2]);
        // console.log("result[i - 2][i - 3] : ", result[i - 2][i - 3]);
        // console.log("result[i - 2][i - 2] : ", result[i - 2][i - 2]);
        console.log("middle : ", middle);
      }
      middle.unshift(1);
      middle.push(1);
      result.push(middle);
      console.log("result : ", result);
      //   console.log("result : ", result);
    }
  }
  //  return console.log(result);
  return result;
};

generate(15);
