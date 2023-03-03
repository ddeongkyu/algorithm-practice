/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  if (!nums.includes(original)) {
    return original;
  }
  let bool = true;
  while (bool) {
    if (nums.includes(original)) {
      original *= 2;
    } else {
      bool = false;
    }
    console.log(`original : ${original}`);
    //   bool = false;
  }
  return original;
};

console.log(findFinalValue([5, 3, 6, 1, 12], 3));
console.log(findFinalValue([2, 7, 9], 4));
