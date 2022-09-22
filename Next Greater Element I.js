var nextGreaterElement = function (nums1, nums2) {
  // 이 밑에꺼 망해서 다시함 ㅡㅡ

  //   let idx = 0;
  //   let curr = 0;
  //   let hello = 0;
  //   let res = [];
  //   let count = 0;
  //   while (idx < nums1.length) {
  //     //first. nums1[0] 값하고 일치하는 nums2[j] 찾기
  //     curr = nums2.findIndex((e) => e === nums1[idx]);
  //     console.log("이게 nums2[j]일것같음", curr);
  //     console.log("nums2[curr] : ", nums2[curr]);
  //     for (let i = 0; i < nums2.length; i++) {
  //       if (res.length === count && nums2[hello] < nums2[curr + 1]) {
  //         res.push(nums2[curr + 1]);
  //         count++;
  //         console.log("있 : ", res);
  //       }
  //       //   if (
  //       //     nums2[curr + 1] === undefined ||
  //       //     nums2[hello] > nums2[curr + 1]
  //       //   )
  //       else {
  //         console.log("whatever");
  //         res.push(-1);
  //         break;
  //       }
  //       curr++;
  //     }
  //     idx++;
  //   }
  //   console.log(res);
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    let idx = nums2.indexOf(nums1[i]);
    console.log("idx : ", idx);
    let hello = 0;
    let penguin = nums2.slice(idx, nums2.length);
    console.log(penguin);
    for (let j = 0; j < penguin.length; j++) {
      if (nums1[i] < penguin[j]) {
        hello = penguin[j];
        console.log("hello : ", hello);
        break;
      } else {
        hello = -1;
      }
    }
    res.push(hello);
  }
  console.log("res final : ", res);
};

console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
