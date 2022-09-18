/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  const r = ransomNote.split("").sort();
  const m = magazine.split("").sort();
  let idx = 0;
  let res = [];
  for (let i = 0; i < m.length; i++) {
    if (m[i] === r[idx]) {
      res.push(m[i]);
      idx++;
    } else {
      res.push("");
    }
  }
  //   console.log("zzz", r.join().trim().length);
  console.log(r);
  console.log("res : ", res);
  console.log(res.join("") === ransomNote.split("").sort().join(""));
  //   console.log(res.join("") === ransomNote, "join");
  //   console.log(r.includes(res), "hello world");
  return res.join("") === ransomNote.split("").sort().join("") ? true : false;
};

console.log(canConstruct("fffbfg", "effjfggbffjdgbjjhhdegh"));
