/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const sorted = [...heights].sort((a, b) => b - a);
  let res = [];
  for (let i = 0; i < heights.length; i++) {
    res.push(names[heights.indexOf(sorted[i])]);
  }
  return res;
};
console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));
