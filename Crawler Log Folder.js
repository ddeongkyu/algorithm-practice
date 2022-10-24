/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let count = 0;
  for (let i = 0; i < logs.length; i++) {
    if (logs[i] === "../") {
      count = Math.max(0, count - 1);
    } else if (logs[i] === "./") {
      continue;
    } else {
      count++;
    }
  }
  return count;
};

console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]));
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"]));
