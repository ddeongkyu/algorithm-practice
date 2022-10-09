/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let obj = {};
  for (let i of arr) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i] += 1;
    }
  }
  let a = new Set(Object.values(obj));
  let b = Object.values(obj);
  // console.log(b)
  return a.size === b.length;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
