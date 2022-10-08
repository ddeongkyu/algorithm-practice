/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  let qu = arr.length / 4;
  console.log(qu);
  let obj = {};
  for (let i of arr) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i] += 1;
    }
  }
  let a = Object.entries(obj).filter((a) => a[1] > qu);
  console.log(a);
  return a[0][0];
};

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]));
