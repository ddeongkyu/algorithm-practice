/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.split(" ");

  //   let res = [];

  s = s.map((a) => a.split("").reverse());
  s = s.map((a) => a.join("")).join(" ");
  //   for (let i = 0; i < s.length; i++) {}
  console.log("s : ", s);
  //   for (let i = 0; i < res.length; i++) {
  //     res[i].join("");
  //   }
  //   console.log(res.join(","));
};

console.log(reverseWords("pengsoo cute"));
