/**

 * @param {number[]} flowerbed

 * @param {number} n

 * @return {boolean}

 */

var canPlaceFlowers = function (flowerbed, n) {
  let ans = 0;

  let result;

  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
      flowerbed[i] = 1;

      ans++;
    }
  }

  console.log(flowerbed);

  ans >= n ? (result = true) : (result = false);

  return result;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
