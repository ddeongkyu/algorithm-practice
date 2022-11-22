/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let res = [0];
  let sum = 0;
  for (let i = 0; i < gain.length; i++) {
    sum += gain[i];
    // console.log(`sum : ${sum}`)
    res[i + 1] = sum;
  }
  // console.log('res : ', res)
  return Math.max(...res);
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
