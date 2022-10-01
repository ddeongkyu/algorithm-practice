/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let res = [];
  let iii = 0;
  let ddd = s.length;
  for (let i = 0; i < s.length; i++) {
    console.log(`iii : ${iii}`);
    console.log(`ddd : ${ddd}`);
    if (s[i] === "I") {
      res.push(iii);
      iii++;
    } else {
      res.push(ddd);
      ddd--;
    }
  }
  res.push(s[s.length - 1] === "D" ? iii : ddd);

  console.log(res);
};

console.log(diStringMatch("IDID"));
