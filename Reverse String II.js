/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  if (k === 1) {
    return s;
  }
  s = s.split("");
  let str = "";
  let i = 0;
  while (i < s.length) {
    console.log(`k : ${k}, i : ${i}`);
    console.log("zzz", s.splice(2, 2));
    let sp = s.splice(i, k).reverse();
    console.log(sp);
    console.log("i, befroeK", i, k);
    for (let i = 0; i < sp.length; i++) {
      str += sp[i];
      console.log("str : ", str);
    }
    s.splice(i, 0, str);
    console.log("merge s : ", s);
    console.log("sp : ", sp);
    str = "";
    i = i + k + 1;
    console.log(`k : ${k}, i : ${i}`);
  }
  console.log(s.join(""));
};

console.log(reverseStr("abcdefghijk", 3));

//"abcdefghijk"
//"bacdfeghjik" . <= k=2
//"cbadefihgjk" .  <= k=3
