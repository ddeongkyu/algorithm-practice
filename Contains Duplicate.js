var containsDuplicate = function (nums) {
  const aa = new Map();
  let result = false;
  for (let i = 0; i < nums.length; i++) {
    if (!aa.has(nums[i])) {
      aa.set(nums[i], 1);
    } else if (aa.has(nums[i])) {
      aa.set(nums[i], aa.get(nums[i]) + 1);
    }
  }
  console.log("aa : ", aa);
  for (const [key, value] of aa) {
    console.log(key, value);
    if (value >= 2) {
      result = true;
    }
  }
  return result;
};

console.log(containsDuplicate([1, 1, 2]));
