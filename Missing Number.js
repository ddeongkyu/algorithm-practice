/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const sort = nums.sort((a, b) => {
    return a - b;
  });
  console.log("sort : ", sort);
  console.log("ㅇ야 있냐 ? ", sort.includes(18));
  let peng = [];
  let idx;
  for (let i = 0; i < sort.length; i++) {
    if (sort[i] + 1 !== sort[i + 1]) {
      sort[i + 1] !== undefined && (idx = i + 1);
      console.log("if");
      peng.push(sort[i]);
    }
    // else {
    //   console.log("else");
    //   idx = i + 2;
    // }
  }
  console.log("peng : ", peng);
  console.log("idx : ", idx);
  if (nums.includes(0)) {
    return nums.length <= sort[sort.length - 1] ? idx : nums.length;
  } else if (nums.includes(0) && idx === undefined) {
    return nums.length;
  } else if (!nums.includes(0) && idx === undefined) {
    return 0;
  }
};

console.log(
  missingNumber([
    45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
    4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34,
    30, 25, 47, 0, 31, 42, 24, 10, 14,
  ])
);

// [1,2 ]= > 0
// [0, 2, 3] => 1
// 아 솔트할때 10 들어가면 그거 a-b로 해야되지 ㅋㅋ
