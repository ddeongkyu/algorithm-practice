/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  //   let res = [];
  //   let obj = {};
  //   for (let w of s) {
  //     if (!obj[w]) {
  //       obj[w] = 1;
  //     } else {
  //       obj[w]++;
  //     }
  //   }
  //   console.log(obj);
  //   let large = Object.entries(obj).filter((a) => a[1] >= 3);
  //   console.log(large);
  //   for (let i = 0; i < large.length; i++) {
  //     for (let j = 0; j < s.length; j++) {
  //       console.log("large i : ", large[i]);
  //       if (
  //         large[i][0] === s[j] &&
  //         large[i][0] === s[j + 1] &&
  //         large[i][0] === s[j + 2]
  //       ) {
  //         res.push([s.indexOf(large[i][0]), s.lastIndexOf(large[i][0])]);
  //       }
  //     }
  //   }
  //   console.log("res : ", res);
  let start = 0;
  let res = [];
  for (let end = 0; end < s.length; end++) {
    if (s[end] !== s[end + 1]) {
      console.log("hello");
      if (end - start + 1 >= 3) {
        console.log([start, end]);
        res.push([start, end]);
      }
      console.log(`start : ${start}`);
      console.log(`end : ${end}`);
      start = end + 1;
    }
  }
  return res;
};

console.log(largeGroupPositions("abcdddeeeeaabbbcd"));
// console.log(largeGroupPositions("abc"));
