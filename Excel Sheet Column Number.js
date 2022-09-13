/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let penguin = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    let pengsoo = columnTitle[columnTitle.length - i - 1];
    console.log("char : ", pengsoo);
    console.log("penguin before : ", penguin);

    penguin += (pengsoo.charCodeAt() - 64) * 26 ** i;
    console.log("penguin after : ", penguin);
  }
  return penguin;
};

console.log(titleToNumber("ABC"));
