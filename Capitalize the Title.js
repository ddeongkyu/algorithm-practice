/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  let result = "";
  let a = title.split(" ");
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i].length < 3) {
        result += a[i][j].toLowerCase();
      } else {
        if (j === 0) {
          result += a[i][j].toUpperCase();
        } else {
          result += a[i][j].toLowerCase();
        }
      }
    }
    result += " ";
  }
  return result.trim();
};

console.log(capitalizeTitle("First leTTeR of EACH Word"));
console.log(capitalizeTitle("i lOve leetcode"));
