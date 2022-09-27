/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  let count = 0;
  let res = 0;

  function isPrime(num) {
    if (num === 1) {
      return false;
    }
    if (num === 2) return true;

    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = left; i <= right; i++) {
    let pp = i.toString(2);
    pp = pp.split("");
    pp.map((a) => (a === "1" ? count++ : null));
    console.log(pp);
    console.log(count);
    if (isPrime(count)) {
      console.log("이거 소수임 : ", count);
      res++;
      count = 0;
    } else if (!isPrime(count)) {
      count = 0;
    }
  }
  console.log("res : ", res);
};

console.log(countPrimeSetBits(6, 10));
