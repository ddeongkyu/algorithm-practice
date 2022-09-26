/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let left = 0;
  let right = nums.reduce((acc, cur) => {
    return acc + cur;
  });
  console.log("outsdie left : ", left);
  console.log("outside right : ", right);
  for (let i = 0; i < nums.length; i++) {
    let pengsoo = nums[i];
    console.log(`pengsoo : ${pengsoo}`);
    right = right - pengsoo;
    console.log("inside right : ", right);
    console.log("inside left : ", left);
    if (left === right) {
      return i;
    }
    left = left + pengsoo;
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([2, 1, -1]));
