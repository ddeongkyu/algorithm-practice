/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j]) {
        count++;
      }
    }
  }
  console.log("count : ", count);
};

console.log(numJewelsInStones("z", "ZZ"));

const a = ["a", "z", "d", "e", "a"];
const b = [...new Set(a)];
console.log(b.sort());

console.log("a" > "b");
