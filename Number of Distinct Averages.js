/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  if (nums.length === 2) {
    return 1;
  }
  let res = [];
  let a = nums.splice(nums.indexOf(Math.max(...nums)), 1);
  let b = nums.splice(nums.indexOf(Math.min(...nums)), 1);
  console.log(a, b);
  res.push((a[0] + b[0]) / 2);
  console.log(res);
  console.log(nums);
  console.log(Math.max(...nums));
  console.log(Math.min(...nums));
  console.log(nums.splice(Math.max(...nums), 1));
  console.log(nums);
  while (nums.length >= 2) {
    let a = nums.splice(nums.indexOf(Math.max(...nums)), 1);
    let b = nums.splice(nums.indexOf(Math.min(...nums)), 1);
    console.log(a, b);
    res.push((a[0] + b[0]) / 2);
  }
  console.log(res);
  return new Set([...res]).size;
};
console.log(distinctAverages([4, 1, 4, 0, 3, 5]));
