/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const aa = new Map();
  console.log(aa);
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!aa.has(nums[i])) {
      aa.set(nums[i], 1);
    } else if (aa.has(nums[i])) {
      aa.set(nums[i], "duplicated"), " 가져온 것 ";
    }
  }
  console.log(aa.entries());
  for (const [key, value] of aa) {
    console.log(value);
    if (value === 1) {
      result = key;
    }
    console.log("result : ", result);
  }
};

singleNumber([1]);
