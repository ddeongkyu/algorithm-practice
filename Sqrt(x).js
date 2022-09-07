/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let pengsoo = 0;
  for (let i = 0; i < 2 ** 31; i++) {
    let study = i * i <= x && (i + 1) * (i + 1) > x;
    if (study) {
      pengsoo = i;
      return (pengsoo = i);
    }
  }
  return console.log(pengsoo);
};

mySqrt(13);
