/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n === 0) {
    return false;
  }
  while (n % 2 === 0) {
    // if (!answerArr.includes(2)) {
    //   answerArr.push(2);
    // }
    n = n / 2;
  }
  while (n % 3 === 0) {
    // if (!answerArr.includes(3)) {
    //   answerArr.push(3);
    // }
    n = n / 3;
  }
  while (n % 5 === 0) {
    // if (!answerArr.includes(5)) {
    //   answerArr.push(5);
    // }
    n = n / 5;
  }
  //   if (n !== 1) {
  //     // answerArr.push(n);
  //     return false;
  //   }
  //   console.log("zzz : ", answerArr);
  //   console.log("밑 n : ", n);
  //   //   if (![2, 3, 5].includes(answerArr)) {
  //   //     return false;
  //   //   }
  //   if (answerArr.includes(2) || answerArr.includes(3) || answerArr.includes(5)) {
  //     return true;
  //   }
  //   console.log(
  //     "zxzcv",
  //     answerArr.includes(2) || answerArr.includes(3) || answerArr.includes(5)
  //   );
  return n === 1 ? true : false;
};

console.log(isUgly(1024));
