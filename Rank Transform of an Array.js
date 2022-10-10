/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  let num = new Set(arr);
  console.log("num : ", num);
  let sorted = [...num].sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    console.log("sorted.indexOf(arr[i]) : ", sorted.indexOf(arr[i]));
    res.push(sorted.indexOf(arr[i]) + 1);
  }
  console.log("res : ", res);
  return res;
};

console.log(arrayRankTransform([40, 10, 20, 30]));
console.log(arrayRankTransform([100, 100, 100]));
