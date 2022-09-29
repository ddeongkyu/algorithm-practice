/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  //Time Limit Exceeded 뜨는 풀이 1
  //   let res = [];
  //   for (let i = 0; i < nums.length - k + 1; i++) {
  //     let pengsoo = [...nums].splice(i, k);
  //     let avg = pengsoo.reduce((acc, cur) => acc + cur) / k;
  //     res.push(avg);
  //   }
  //   return res.sort((a, b) => b - a)[0];
  //Time Limit Exceeded 뜨는 풀이 2
  //   let res = [];
  //   const avghahaha = (i, k) => {
  //     return [...nums].splice(i, k).reduce((acc,cur) => acc + cur) / k
  //   }
  //   for(let i = 0; i < nums.length - k + 1; i++) {
  //     res.push(avghahaha(i, k));
  //     }
  //     // console.log(res)
  //     res.sort((a,b) => b-a)
  //     return res[0]

  //Sliding Window 방식
  let curr = nums.slice(0, k).reduce((acc, cur) => acc + cur, 0);
  let best = curr;
  for (let i = 1; i < nums.length - k + 1; i++) {
    curr = curr - nums[i - 1] + nums[i + k - 1];
    best = Math.max(curr, best);
  }
  return best / k;
};

console.log(findMaxAverage([3, 1, 302, 1, 352], 2));
