/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    console.log(`s[i] : ${s[i]}, charcode : ${s[i].charCodeAt()}`);
    if (s[i].charCodeAt() < 97) {
      console.log(
        ` String.fromCharCode(Number(s[i]) + 97) : ${String.fromCharCode(
          Number(s[i]) + 97
        )}`
      );
      res += String.fromCharCode(Number(s[i]) + Number(s[i - 1].charCodeAt()));
    } else {
      res += s[i];
    }
  }
  console.log(res);
};
console.log(replaceDigits("a1c1e1"));
console.log(replaceDigits("a1b2c3d4e"));
