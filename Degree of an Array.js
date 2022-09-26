/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let obj = {};
  let n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]] = obj[nums[i]] + 1;
    }
  }
  let degree = Math.max.apply(null, Object.values(obj));
  console.log("degree : ", degree);
  let arr = Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .map((a) => a.map((b) => +b));
  console.log("arr : ", arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] !== degree) {
      break;
    }
    let curr = nums.lastIndexOf(arr[i][0]) - nums.indexOf(arr[i][0]) + 1;
    console.log("curr : ", curr);
    if (curr < n) {
      n = curr;
    }
  }
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i][1] !== degree) break;

  //     let currSubArr = nums.lastIndexOf(arr[i][0]) - nums.indexOf(arr[i][0]) + 1;
  //     console.log("curr : ", currSubArr);
  //     if (currSubArr < n) n = currSubArr;
  //   }

  console.log("result n : ", n);
};

console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));
