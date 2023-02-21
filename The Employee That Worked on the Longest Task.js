/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
  let max = 0;
  let curr = 0;
  let idx;
  for (let i = 0; i < logs.length; i++) {
    console.log(logs[i]);
    if (i === 0) {
      max = logs[i][1];
      idx = logs[i][0];
    } else {
      curr = logs[i][1] - logs[i - 1][1];
      console.log(`i : ${i}`);
      console.log(`idx : ${idx}`);
      console.log(`curr : ${curr}`);
      console.log(`max : ${max}`);
      if (curr > max) {
        max = curr;
        idx = logs[i][0];
        idx = logs[i][0];
      } else if (curr === max) {
        if (idx > logs[i][0]) {
          idx = logs[i][0];
        }
      }
    }
  }

  console.log(`max : ${max}`);
  console.log(`final answer : ${idx}`);
};

console.log(
  hardestWorker(10, [
    [0, 3],
    [2, 5],
    [0, 9],
    [1, 15],
  ])
);
console.log(
  hardestWorker(2, [
    [0, 10],
    [1, 20],
  ])
);
console.log(
  hardestWorker(26, [
    [1, 1],
    [3, 7],
    [2, 12],
    [7, 17],
  ])
);
console.log(
  hardestWorker(70, [
    [36, 3],
    [1, 5],
    [12, 8],
    [25, 9],
    [53, 11],
    [29, 12],
    [52, 14],
  ])
);
