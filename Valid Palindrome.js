/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const a = s.toLowerCase();
  const b = a.replace(/[^a-z0-9]/gi, "");
  const c = b.split("");
  const d = c.reverse();
  const e = d.join("");
  console.log(c);
  console.log(d);
  console.log(e);
  console.log(e === b);
};

isPalindrome("0p");
