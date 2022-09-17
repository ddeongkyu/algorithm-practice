/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let middle = [];
  for (let i = 0; i <= n; i++) {
    console.log("i : ", i);
    middle.push(
      Number(
        i
          .toString(2)
          .split("")
          .reduce((acc, cur) => {
            return Number(acc) + Number(cur);
          })
      )
    );
  }

  console.log(middle);
  return middle;
};

console.log(countBits(4));
