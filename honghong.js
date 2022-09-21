// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you lea

const deleteDup = (nums) => {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (!res.includes(nums[i])) {
      res.push(nums[i]);
    } else if (res.includes(nums[i])) {
      res.push("_");
    }
  }
  let idx = 0;
  for (let i = 0; i < res.length; i++) {
    if (res[idx] !== "_") {
      idx++;
    } else if (res[idx] === "_") {
      res.push("_");
      res.splice(idx, 1);
    }
  }
  console.log("res : ", res);
};
console.log(deleteDup([5, 3, 1, 9, 3, 8, 2, 1, 1]));
// 포문 돌면서 "_"를 찾아서 잘라낸다음 맨뒤에 붙임.
// 배열의 인덱스 값으로 "_"찾음, i값 필요.
