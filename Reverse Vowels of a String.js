/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  s = s.split("");
  let middle = [];
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      middle.push(s[i]);
      s[i] = "모음";
    }
  }
  console.log("middle s : ", s);
  let sorry = middle.length - 1;
  console.log("sorry : ", sorry);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "모음") {
      s[i] = middle[sorry];
      sorry = sorry - 1;
    }
  }
  let result = s.join("");
  console.log("result : ", result);
  console.log("middle : ", middle);
};

console.log(reverseVowels("aA"));
// input aA => output Aa 라는데 ??
// vowels array에 capital 문자들도 추가해야되나?
// 넣고 돌려보니까 aA ->Aa 나옴 ㅋㅋ
