/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  let obj = {};
  for (let i of s) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i] += 1;
    }
  }
  let a = Object.keys(obj).map((a) => a.toUpperCase());
  const findDuplicates = (arr) =>
    arr.filter((item, index) => arr.indexOf(item) !== index);
  const duplicates = findDuplicates(a).sort().reverse();
  console.log(duplicates);
  return duplicates.length === 0 ? "" : duplicates[0];
};

console.log(
  greatestLetter("nzmguNAEtJHkQaWDVSKxRCUivXpGLBcsjeobYPFwTZqrhlyOIfdM")
);
