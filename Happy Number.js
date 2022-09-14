/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let pengsoo = n.toString();
  let sum = 0;
  let whatever = [];
  let result = false;
  while (pengsoo !== 1 && !whatever.includes(pengsoo)) {
    sum = 0;
    whatever.push(pengsoo);
    console.log(`가장 중요한 펭수 값 : ${pengsoo}`);
    console.log(whatever);
    for (let i of pengsoo) {
      //   console.log(`i 제곱 : ${i ** 2}`);
      sum = sum + i ** 2;
      //   console.log(`sum 값 : ${sum}`);
    }
    if (sum === 1) {
      return true;
    }
    pengsoo = sum.toString();
  }
  if (pengsoo !== 1) {
    result = false;
  } else {
    result = true;
  }
  return result;
};

console.log(isHappy(19));
