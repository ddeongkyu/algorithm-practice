/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let leftRight = 0;
  let upDown = 0;
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "L") {
      leftRight--;
    } else if (moves[i] === "R") {
      leftRight++;
    } else if (moves[i] === "U") {
      upDown++;
    } else if (moves[i] === "D") {
      upDown--;
    }
  }
  console.log(leftRight);
  console.log(upDown);
  return !leftRight && !upDown ? true : false;
};

console.log(judgeCircle("UD"));

// /**
//  * @param {string} moves
//  * @return {boolean}
//  */
//  var judgeCircle = function(moves) {
//     let has = new Map();
//     for(let i = 0; i < moves.length; i++) {
//       if(!has.has(moves[i])) {
//         has.set(moves[i], 1)
//       } else if (has.has(moves[i])) {
//         has.set(moves[i], has.get(moves[i]) + 1)
//       }
//     }
//     console.log(has)
//     let a = has.get("U") - has.get("D")
//     let b = has.get("L") - has.get("R")
//     return !a && !b
//   };

//   console.log(judgeCircle("ULDR"))
