/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let a = new Set([...nums1]);
  let b = new Set([...nums2]);
  nums2.forEach((aa) => {
    a.delete(aa);
  });
  nums1.forEach((aa) => {
    b.delete(aa);
  });
  // console.log(a)
  return [[...a], [...b]];
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
