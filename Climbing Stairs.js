/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let answer = 3;
  let first = 1;
  let second = 2;
  let prevFirst = 1;
  let prevSecond = 2;
  if (n === 1) {
    return (answer = 1);
  }
  if (n === 2) {
    return (answer = 2);
  }
  if (n >= 3) {
    for (let i = 3; i <= n - 1; i++) {
      console.log("first : ", first);
      console.log("second : ", second);
      console.log("answer : ", answer);
      prevSecond = second;
      prevFirst = first;
      second = prevSecond + prevFirst;
      first = prevSecond;
      answer = second + first;
    }
    return answer;
  }
};

climbStairs(5);
