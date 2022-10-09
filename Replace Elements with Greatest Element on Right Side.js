/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  if (arr.length === 1) {
    return [-1];
  }
  let res = [];
  for (let i = 1; i < arr.length; i++) {
    res.push(Math.max.apply(null, arr.slice(i, arr.length)));
  }
  res.push(-1);
  return res;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));

const aa = [17, 18, 5, 4, 6, 1];
console.log(Math.max.apply(null, aa.slice(1, aa.length)));
console.log(aa);
