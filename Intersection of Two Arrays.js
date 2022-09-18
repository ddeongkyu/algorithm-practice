/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const length = nums1.length >= nums2.length ? nums1.length : nums2.length;
  const long = nums1.length >= nums2.length ? nums1 : nums2;
  const short = nums1.length >= nums2.length ? nums2 : nums1;
  let middle = [];
  let idx = 0;
  for (let i = 0; i < length; i++) {
    if (long[i] === short[idx]) {
      middle.push(long[i]);
      idx++;
    }
  }
  //   const airpod = [...new Set(middle)];
  //   return airpod;
  let dif = nums1.filter((x) => nums2.includes(x));
  console.log(dif);
};

console.log(intersection([1, 2], [2, 1]));
