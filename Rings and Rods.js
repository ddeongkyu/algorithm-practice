/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  let obj = {};
  let res = 0;
  for (let i = 0; i < rings.length; i += 2) {
    //2개씩 끊어서
    let aa = rings[i] + rings[i + 1];
    let bb = rings[i + 1];
    if (!obj[aa]) {
      obj[aa] = 1;

      if (obj["R" + bb] && obj["G" + bb] && obj["B" + bb]) {
        res++;
      }
    }
  }
  console.log(obj);
  return res;
};

console.log(countPoints("B0B6G0R6R0R6G9"));
