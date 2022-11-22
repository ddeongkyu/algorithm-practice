/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let a = [...nums];
  let count = 0;
  let res = 0;
  for (let i = 1; i < nums.length; i++) {
    //   console.log(a[i-1],a[i])
    if (a[i] <= a[i - 1]) {
      count = a[i - 1] - a[i] + 1 + a[i];
      // console.log('inner before count : ', count)
      res += count - a[i];
      a[i] = count;
      count = 0;
    }
  }
  return res;
};

console.log(minOperations([1, 1, 1]));
console.log(minOperations([1, 5, 2, 4, 1]));
console.log(minOperations([8]));
