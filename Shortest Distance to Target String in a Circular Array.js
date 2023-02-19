/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function (words, target, startIndex) {
  if (!words.includes(target)) {
    return -1;
  }
  let res = 99999;
  //idea : 반으로 쪼개서 이어붙임.(조건에 따라서 왼쪽이든 오른쪽이든)
  //idea : for문을 왼,오로 돌려서 값 리턴;
  // words.indexOf(target) 과 startIndex를 비교.
  // < 면 왼쪽으로, >= 면 오른쪽으로...
  // const num = Math.floor(words.length/2)
  //  let aa = words.concat(words.slice(0, -1))
  // console.log(aa)
  console.log(words.indexOf(target, 0));
  const num = words.indexOf(target, startIndex);

  if (num > startIndex) {
    for (let i = 0; i <= num; i++) {
      let b = words.indexOf(target, i);
      //  console.log(b)
      if (res > Math.abs(b - num)) {
        res = Math.abs(b - num);
      }
    }
  } else {
    for (let i = 0; i <= startIndex; i++) {
      let b = words.indexOf(target, i);
      //  console.log(b)
      console.log("b : ", b);
      if (res > Math.abs(b - startIndex)) {
        res = Math.abs(b - startIndex);
      }
    }
  }
  return res;
};
// /**
//  * @param {string[]} words
//  * @param {string} target
//  * @param {number} startIndex
//  * @return {number}
//  */
//  var closetTarget = function(words, target, startIndex) {
//     let left = startIndex
//     let right = startIndex
//     let step = 0
//     let n = words.length

//     while(step <= n){
//         if(words[left]===target||words[right]===target){
//             return step
//         } else {
//             right = (right + 1) % n
//             left = (left - 1 + n) % n
//         }
//         step ++
//     }
//     return -1
// };
console.log(
  closetTarget(["hello", "i", "am", "leetcode", "hello"], "hello", 1)
);
console.log(closetTarget(["a", "b", "leetcode"], "leetcode", 0));
