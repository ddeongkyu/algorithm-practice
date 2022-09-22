/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let t = timeSeries;
  let d = duration;
  let res = 0;
  for (let i = 0; i < t.length; i++) {
    let nextPo = t[i + 1];
    res += d;
    if (d >= t[i + 1] - t[i]) {
      console.log("po < nextPo");
      res = res - d + nextPo - t[i];
    }
    //  console.log("중독시간 : ", t[i]);
  }
  console.log(res);
};

// console.log(findPoisonedDuration([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
// console.log(findPoisonedDuration([1, 2], 2));
console.log(findPoisonedDuration([1, 4], 2));
