/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
  let date = new Date(year, month - 1, day);
  console.log("date : ", date);
  let res = date.toLocaleString("en", { weekday: "long" });
  console.log(res);
  return res;
};

console.log(dayOfTheWeek(31, 8, 2019));
console.log(dayOfTheWeek(18, 7, 1999));
console.log(dayOfTheWeek(15, 8, 1993));
