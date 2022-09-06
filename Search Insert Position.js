/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const result = [];
  if (nums.indexOf(target) !== -1) {
    result.push(nums.indexOf(target));
  } else if (nums.indexOf(target) === -1) {
    const pushed = [...nums, target];
    result.push(
      pushed
        .sort((a, b) => {
          return a - b;
        })
        .indexOf(target)
    );
  }
  return console.log(result);
};

searchInsert([1, 3, 5, 6], 2);
