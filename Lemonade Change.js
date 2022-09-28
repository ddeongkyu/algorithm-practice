/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let obj = { 5: 0, 10: 0, 20: 0 };
  for (let i = 0; i < bills.length; i++) {
    // 5달러  냄
    if (bills[i] === 5) {
      obj["5"] = obj["5"] + 1;
    } //10달러 냄
    else if (bills[i] === 10) {
      if (obj["5"] <= 0) {
        return false;
      } else {
        obj["10"] = obj["10"] + 1;
        obj["5"] = obj["5"] - 1;
      }
    }
    //20 dollor
    else {
      if (obj["5"] <= 0) {
        return false;
      } else if (obj["10"] <= 0) {
        if (obj["5"] < 3) {
          return false;
        } else {
          obj["5"] = obj["5"] - 3;
          obj["20"] = obj["20"] + 1;
        }
      } else {
        obj["20"] = obj["20"] + 1;
        obj["10"] = obj["10"] - 1;
        obj["5"] = obj["5"] - 1;
      }
    }
  }
  return true;
};

console.log(lemonadeChange([5, 5, 10, 10, 20]));
