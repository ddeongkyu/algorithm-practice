/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let p = j + 1; p < arr.length; p++) {
        if (Math.abs(arr[i] - arr[j]) <= a) {
          if (Math.abs(arr[j] - arr[p]) <= b) {
            if (Math.abs(arr[i] - arr[p]) <= c) {
              count++;
            }
          }
        }
      }
    }
  }
  console.log(`count: ${count}`);
  return count;
};

console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));
