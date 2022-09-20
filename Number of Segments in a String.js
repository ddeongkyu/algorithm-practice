/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  s = s.trim();
  if (s === "") {
    return 0;
  }
  if (!s.includes(" ")) {
    return 1;
  }
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      if (s[i + 1] !== " ") {
        count++;
      }
    }
  }
  console.log("내가 생각하는 정답 : ", count + 1);
  return count + 1;
};

console.log(countSegments("Hello,         my name is John"));
