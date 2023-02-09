/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let str = "";
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    str += String(s[i].charCodeAt() - 96);
  }
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < str.length; j++) {
      res += Number(str[j]);
    }
    str = String(res);
    res = 0;
  }
  return Number(str);
};

console.log(getLucky("zbax", 2));
console.log(getLucky("iiii", 2));
console.log(getLucky("leetcode", 2));
