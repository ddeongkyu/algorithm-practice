/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  if (a === b) {
    return -1;
  }

  //   let idx = 0;
  //   let max = 0;
  //   let longLeng = a.length >= b.length ? a.length : b.length;
  //   let str = "";
  //   while (idx < longLeng) {
  //     str = str + a[idx];
  //     idx++;
  //     if (max < idx) {
  //       max = idx;
  //     }
  //   }
  //   console.log(`max : ${max}`);
  //   console.log(`idx : ${idx}`);
  //   console.log(`str : ${str}`);
  return Math.max(a.length, b.length);
};

console.log(findLUSlength("aaaa", "bbba"));
