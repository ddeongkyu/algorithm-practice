/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let aa = s.replace(
    /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"\0-9]/gi,
    ""
  );
  let bb = s.replace(/[a-zA-Z ]/gim, " ");
  let dd = aa.split("").reverse().join("");
  // console.log(dd)
  bb.split(" ");
  let cc = [...bb];
  let idx = 0;
  let i = 0;
  while (i < bb.length) {
    if (bb[i] === " ") {
      cc[i] = dd[idx];
      idx++;
    }
    i++;
  }
  return cc.join("");
};

console.log(reverseOnlyLetters("ab-cd"));
console.log(reverseOnlyLetters("a-bd123-43pq"));
