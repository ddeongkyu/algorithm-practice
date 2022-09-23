/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num === 1) {
    return false;
  }
  let aa = [];
  let idx = 1;
  while (idx <= num) {
    if (num % idx === 0) {
      aa.push(idx);
    }
    console.log(`idx: ${idx}`);
    idx++;
  }
  let bb = aa.slice(0, aa.length - 1);
  console.log(
    "같냐? : ",
    bb.reduce((acc, cur) => {
      return acc + cur;
    }) === num
  );
  return (
    bb.reduce((acc, cur) => {
      return acc + cur;
    }) === num
  );
};

console.log(checkPerfectNumber(28));
