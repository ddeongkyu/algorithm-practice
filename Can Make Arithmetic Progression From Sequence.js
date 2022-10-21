/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  // SOLUTION 1
  //   arr.sort((a, b) => b - a);
  //   let res = [];
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     res.push(arr[i] - arr[i + 1]);
  //   }
  //   let a = new Set([...res]);
  //   console.log(a.size);
  //   return a.size === 1 ? true : false;

  // SOLUTION 2
  arr.sort((a, b) => a - b);
  console.log(arr);
  let i = 0;
  while (i + 1 < arr.length - 1) {
    let diff = arr[i] - arr[i + 1];
    let nextDiff = arr[i + 1] - arr[i + 2];
    console.log(diff);
    console.log(nextDiff);
    if (diff !== nextDiff) {
      return false;
    }
    i++;
  }
  return true;
};

console.log(canMakeArithmeticProgression([3, 5, 1]));
console.log(canMakeArithmeticProgression([1, 2, 4]));
