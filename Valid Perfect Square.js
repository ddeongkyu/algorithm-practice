/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let penguin = 1;
  while (true || false) {
    if (penguin * penguin === num) return true;
    if (penguin * penguin > num) return false;
    penguin++;
    console.log(penguin);
  }
};

console.log(isPerfectSquare(49));
