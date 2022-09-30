/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  let obj = {};
  let arr = [];
  for (let i = 0; i < deck.length; i++) {
    if (!obj[deck[i]]) {
      obj[deck[i]] = 1;
    } else {
      obj[deck[i]]++;
    }
  }
  let o = Object.entries(obj);
  let p = Math.min.apply(null, Object.values(obj));
  for (let i = 1; i <= p; i++) {
    if (p % i === 0) {
      arr.push(i);
    }
  }
  arr.shift();
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (o.every((a) => a[1] % arr[i] === 0)) {
      return true;
    }
  }
  return false;
};

console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2]));
console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
