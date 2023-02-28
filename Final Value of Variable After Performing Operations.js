/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let res = 0;
  // solution 1
  //   for (let i = 0; i < operations.length; i++) {
  //     if (operations[i][0] === "X") {
  //       if (operations[i][1] === "+") {
  //         res++;
  //       } else if (operations[i][1] === "-") {
  //         res--;
  //       }
  //     } else if (operations[i][0] === "+") {
  //       res++;
  //     } else if (operations[i][0] === "-") {
  //       res--;
  //     }
  //   }
  //   return res;

  // solution 2
  for (let i = 0; i < operations.length; i++) {
    if (operations[i][1] === "+") {
      res++;
    } else {
      res--;
    }
  }
  return res;
};

console.log(finalValueAfterOperations(["++X", "++X", "X++"]));
console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]));
