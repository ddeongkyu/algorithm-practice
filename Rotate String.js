/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  s = s.split("");
  let storage = "";
  let idx = 0;
  console.log("ouside s : ", s);
  while (idx < s.length) {
    storage = s[0];
    console.log("storage : ", storage);
    s.shift();
    console.log("aftershift s  : ", s);
    s.push(storage);
    console.log("idx : ", idx);
    console.log("push inner s : ", s);
    if (s.join("") === goal) {
      return true;
    }
    storage = "";
    idx++;
  }
  return false;
};

console.log(rotateString("abcde", "cdeab"));
