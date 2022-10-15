/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  let K_BEAUTY = 0;
  let n = num.toString().split("");
  console.log(n.slice(1, k + 1));
  console.log("n : ", n);
  for (let i = 0; i < n.length - k + 1; i++) {
    if (num % Number(n.slice(i, k + i).join("")) === 0) {
      K_BEAUTY++;
    }
  }
  return K_BEAUTY;
};

console.log(divisorSubstrings(240, 2));
console.log(divisorSubstrings(430043, 2));
