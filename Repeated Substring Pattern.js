/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  //   let idx = 0;
  //   let res = false;
  //   let i = 2;

  //   if (s.length === 3) {
  //     s[0] === s[1] && s[1] === s[2] ? (res = true) : (res = false);
  //   }
  //   while (i < s.length) {
  //     if (s[idx] === s[i]) {
  //       //   console.log(s[idx]);
  //       if (s[idx + 1] === s[i + 1]) {
  //         return (res = true);
  //       }
  //       i++;
  //       idx++;
  //     } else if (s[idx] !== s[i]) {
  //       i++;
  //     }
  //   }
  //   return res;
  let len = s.length;
  let currStr;

  for (let i = 1; i <= len / 2; i++) {
    currStr = s.substring(0, i);
    console.log("first curr : ", currStr);
    if (len % i === 0) {
      currStr = currStr.repeat(len / i);
      console.log("second curr : ", currStr);

      if (currStr === s) return true;
    }
  }
  return false;
};

console.log(repeatedSubstringPattern("aaaaa"));

// ababba 가 false 라는데? ab 두번 반복되잖아
