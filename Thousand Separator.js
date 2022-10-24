/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  n = n.toString().split("");
  const dot = ".";
  let count = 0;
  for (let i = n.length - 1; i >= 0; i--) {
    count++;
    if (count === 3) {
      n.splice(i, 0, dot);
      count = 0;
    }
  }
  if (n[0] === dot) {
    n.shift();
  }
  return n.join("");
};
console.log(thousandSeparator(987));

console.log(thousandSeparator(1234));
