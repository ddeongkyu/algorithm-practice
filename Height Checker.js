/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  console.log(heights);

  let sorted = [...heights].sort((a, b) => a - b);
  console.log(sorted);
  let ans = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== heights[i]) {
      ans++;
    }
  }
  console.log("res : ", ans);
};

console.log(heightChecker([5, 1, 2, 3, 4]));
