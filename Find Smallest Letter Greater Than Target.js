/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let aa = [...new Set(letters)];
  aa.sort();
  let str = "";
  for (let i = 0; i < aa.length; i++) {
    if (aa[i] > target) {
      str = aa[i];
      break;
    }
  }
  console.log("str : ", str);
  let bb = !str ? letters : aa.splice(aa.indexOf(str));
  return bb[0];
};

console.log(nextGreatestLetter(["c", "f", "j"], "c"));
