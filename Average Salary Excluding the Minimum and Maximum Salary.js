/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let a = salary.sort((a, b) => a - b);
  a.pop();
  a.shift();
  console.log(a);
  return a.reduce((acc, cur) => acc + cur) / a.length;
};

console.log(average([4000, 3000, 1000, 2000]));
console.log(average([1000, 2000, 3000]));
