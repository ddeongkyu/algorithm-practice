/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
  if (!income) {
    return 0;
  }
  let tax = 0;
  for (let i = 0; i < brackets.length; i++) {
    if (i === 0 && income > brackets[i][0]) {
      tax += (brackets[i][0] * brackets[i][1]) / 100;
      income -= brackets[i][0];
    } else if (i === 0 && income <= brackets[i][0]) {
      return (income * brackets[i][1]) / 100;
    } else {
      let per = brackets[i][0] - brackets[i - 1][0];
      console.log("per : ", per);
      console.log("inner income : ", income);
      if (per < income) {
        console.log("hello~");
        tax += (per * brackets[i][1]) / 100;
        console.log("hello tax : ", (per * brackets[i][1]) / 100);
        income -= per;
      } else {
        tax += (income * brackets[i][1]) / 100;
        break;
      }
    }
    //  let per = brackets[i][0] - brackets[i-1][0]
    //  console.log('per : ', per)
    // if(income >= per) {
    //   tax = (income - per) * brackets[i-1][1]/100
    //   console.log('inner tax : ', tax)
    //   income -= per
    // }
  }
  console.log("tax : ", tax);
  //  console.log('tax : ',tax)
};

console.log(
  calculateTax(
    [
      [3, 50],
      [7, 10],
      [12, 25],
    ],
    10
  )
);
