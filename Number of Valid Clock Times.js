/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
  const a = time.split(":");
  let left;
  let right;
  //  left logic
  console.log(a);
  console.log(a[0][0]);
  console.log(a[0][1]);
  console.log(a[0][0] === String(2) && a[0][1] === "?");
  if (a[0][0] === "?" && a[0][1] >= 4) {
    left = 2;
  } else if (a[0][0] === "?" && a[0][1] < String(5)) {
    left = 3;
  } else if (a[0][0] === "?" && a[0][1] === "?") {
    left = 24;
  } else if (a[0][0] !== "?" && a[0][0] < String(2) && a[0][1] === "?") {
    left = 10;
  } else if (a[0][0] === String(2) && a[0][1] === "?") {
    left = 4;
  } else if (a[0][0] !== "?" && a[0][1] !== "?") {
    // 곱하기 할거라서 ? 없으면 1로 놓음.
    left = 1;
  }
  // riight logic
  if (a[1][0] === "?" && a[1][1] !== "?") {
    right = 6;
  } else if (a[1][0] !== "?" && a[1][1] === "?") {
    right = 10;
  } else if (a[1][0] === "?" && a[1][1] === "?") {
    right = 60;
  } else if (a[1][0] !== "?" && a[1][1] !== "?") {
    right = 1;
  }
  console.log(left, right);
  console.log(a);
  return left * right;
};

console.log(countTime("?5:00"));
console.log(countTime("0?:0?"));
console.log(countTime("??:??"));
console.log(countTime("2?:??"));
console.log(countTime("?4:22"));
