/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let obj = {};
  for (let i of arr) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i] += 1;
    }
  }
  console.log(Object.entries(obj));
  let a = Object.entries(obj)
    .filter((a) => Number(a[0]) === a[1])
    .sort((a, b) => b[1] - a[1]);
  console.log(a);
  return a.length === 0 ? -1 : a[0][1];
};

console.log(findLucky([2, 2, 3, 4]));
console.log(findLucky([1, 2, 2, 3, 3, 3]));
