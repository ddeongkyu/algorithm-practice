/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function (rowIndex) {
  let result = [];
  if (rowIndex === 0) {
    result = [1];
  }
  if (rowIndex === 1) {
    result = [1, 1];
  }
  if (rowIndex > 1) {
    let rowA = rowIndex + 1;
    prevResult = [[1], [1, 1]];
    for (let i = 3; i < rowA + 1; i++) {
      console.log("i : ", i);
      let middle = [];
      for (let j = 0; j <= i - 3; j++) {
        middle.push(prevResult[i - 2][j] + prevResult[i - 2][j + 1]);
      }
      middle.unshift(1);
      middle.push(1);
      prevResult.push(middle);
      console.log("prevResult : ", prevResult);
      result = prevResult[rowIndex];
    }
  }
  console.log("진짜루 리절트 ", result);
};

getRow(3);
