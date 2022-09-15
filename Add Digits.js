/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let pengsoo = 0;
  const sumAll = (penguin) => {
    return penguin
      .toString()
      .split("")
      .reduce((acc, cur) => Number(acc) + Number(cur));
  };
  pengsoo = sumAll(num);
  while (pengsoo >= 10) {
    console.log(`결과값 : ${pengsoo}`);
    pengsoo = sumAll(pengsoo);
  }
  return pengsoo;
};

console.log(addDigits(33328));
