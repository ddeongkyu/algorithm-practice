console.log("a".charCodeAt());
console.log("z".charCodeAt());
console.log("A".charCodeAt());
console.log("Z".charCodeAt());
Math.min(
  Math.abs("a".charCodeAt()) - "z".toUpperCase().charCodeAt() - 6,
  Math.abs("a".charCodeAt() - "z".charCodeAt())
);

/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  let res = 0;
  if (word[0] !== "a") {
    res += Math.min(
      Math.abs("a".charCodeAt()) - word[0].toUpperCase().charCodeAt() - 6,
      Math.abs("a".charCodeAt() - word[0].charCodeAt())
    );
  }
  console.log("res : ", res);
  for (let i = 1; i < word.length; i++) {
    console.log(word[i - 1], word[i]);
    let point = Math.min(
      Math.abs(
        word[i - 1].charCodeAt() - word[i].toUpperCase().charCodeAt() - 6
      ),
      Math.abs(word[i - 1].charCodeAt() - word[i].charCodeAt()),
      Math.abs(word[i - 1].toUpperCase().charCodeAt() - word[i].charCodeAt()) -
        6
    );
    console.log(`point : ${point}`);
    console.log(
      "zz : ",
      word[i - 1].toUpperCase().charCodeAt(),
      word[i].charCodeAt(),
      6
    );
    res += point;
  }
  return res + word.length;
};
console.log(minTimeToType("pdy"));
console.log(minTimeToType("zjpc"));
console.log(minTimeToType("bza"));
console.log(minTimeToType("abc"));

console.log("z".charCodeAt() - "j".charCodeAt());
console.log("z".charCodeAt(), "j".toUpperCase().charCodeAt());
console.log("z".toUpperCase().charCodeAt() - "j".charCodeAt());
