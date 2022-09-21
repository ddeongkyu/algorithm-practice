/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let idx = 0;
  let res = false;
  let i = 2;

  if (s.length === 3) {
    s[0] === s[1] && s[1] === s[2] ? (res = true) : (res = false);
  }
  while (i < s.length) {
    if (s[idx] === s[i]) {
      //   console.log(s[idx]);
      if (s[idx + 1] === s[i + 1]) {
        return (res = true);
      }
      i++;
      idx++;
    } else if (s[idx] !== s[i]) {
      i++;
    }
  }
  return res;
};

console.log(repeatedSubstringPattern("ababba"));

// ababba 가 false 라는데? ab 두번 반복되잖아
