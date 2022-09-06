/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let changedNumber = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = "_";
      changedNumber++;
      //   nums.sort();
    }
  }
  nums.sort();
  console.log("number Array : ", nums);
  console.log("남아있는 숫자의 렝뜨 : ", Math.abs(changedNumber - nums.length));
  return Math.abs(changedNumber - nums.length);
};

// removeDuplicates([1, 1, 1, 1, 1, 2, 2, 3, 4, 5, 6]);
// 이거 제출 -> 오류. [-3,-1,0,0,0,3,3] 돌렸을때 [-3,-1,0,3] 대신에 [-1,-3,0,3] 뜸

var removeDuplicates = function (nums) {
  let changedNumber = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = "";
      changedNumber++;
    }
  }
  nums
    .sort((a, b) => {
      return a - b;
    })
    .filter((a) => a !== "");
  //   console.log(
  //     nums
  //       .sort((a, b) => {
  //         return a - b;
  //       })
  //       .filter((a) => a !== "")
  //   );
  //   console.log("number Array  수정본 : ", nums);
  //   console.log(
  //     "남아있는 숫자의 렝뜨 수정본 : ",
  //     Math.abs(changedNumber - nums.length)
  //   );
  //   return console.log(Math.abs(changedNumber - nums.length));
};

removeDuplicates([-3, -1, 0, 0, 0, 3, 5]);

const removeDup = (num) => {
  let pengsoo = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== num[i + 1]) {
      pengsoo++;
    }
  }
  return console.log(pengsoo);
};
removeDup([1, 1, 2]);

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
