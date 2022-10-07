/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  if (arr.length < 3) {
    return false;
  }
  for (let i = 2; i < arr.length; i++) {
    if (arr[i - 2] % 2 && arr[i - 1] % 2 && arr[i] % 2) {
      return true;
    }
  }
  return false;
};
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
