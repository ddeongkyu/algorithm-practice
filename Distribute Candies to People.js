/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  let arr = new Array(num_people).fill(0);
  let i = 1;
  let idx = 0;
  while (candies > 0) {
    arr[idx] += i >= candies ? candies : i;
    idx++;
    if (idx === arr.length) {
      idx = 0;
    }
    candies -= i;
    i++;
  }
  return arr;
};

console.log(distributeCandies(7, 4));
console.log(distributeCandies(10, 3));
