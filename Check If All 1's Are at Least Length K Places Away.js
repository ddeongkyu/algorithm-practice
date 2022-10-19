/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let count = 0;
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
    } else {
      console.log(i);
      res.push(count);
      count = 0;
    }
  }
  console.log(res);
  if (nums[0] === 1) {
    res.shift();
  } else if (nums[0] === 0) {
    res.shift();
  }
  let pp = res.map((a) => a >= k);
  console.log(pp);
  return pp.includes(false) ? false : true;
};

console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2));
