/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  let max = 0;
  for (let i = 0; i < colors.length; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      if (colors[i] !== colors[j]) {
        if (max <= Math.abs(i - j)) {
          max = Math.abs(i - j);
        }
      }
    }
  }
  return max;
};

console.log(maxDistance([1, 8, 3, 8, 3]));
console.log(maxDistance([1, 1, 1, 6, 1, 1, 1]));
console.log(maxDistance([0, 1]));
