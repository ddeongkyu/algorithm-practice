/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
  let answer = [];
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    cur = cur * 2 + nums[i];
    if (cur % 5 === 0) {
      answer.push(true);
    } else {
      answer.push(false);
    }
    cur %= 5;
  }

  return answer;
};

console.log(prefixesDivBy5([0, 1, 1]));
