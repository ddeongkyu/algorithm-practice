/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let res = [];
  // 최소 차이? 값 어쨌든 그 값임 min이
  let min = arr[1] - arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] < min) {
      min = arr[i] - arr[i - 1];
    }
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === min) {
      res.push([arr[i - 1], arr[i]]);
    }
  }
  console.log("res : ", res);
};

console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]));
