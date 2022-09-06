/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const arrr = Array.from(s.trim());
  const pengsoo = [];
  for (let i = 0; i < arrr.length; i++) {
    if (arrr[i] !== " ") {
      pengsoo.push(arrr[i]);
    } else if (arrr[i] === " ") {
      pengsoo.length = 0;
    }
  }
  //   console.log(whyArr);
  //   console.log(
  //     "result : ",
  //     pengsoo.reduce((acc, cur) => acc + cur)

  //   );
  return console.log(pengsoo.reduce((acc, cur) => acc + cur).length);

  //   console.log(whyArr);
  //   console.log(
  //     // whyArr[whyArr.length - 1 === " " ? whyArr.length - 2 : whyArr.length - 1]
  //     whyArr
  //   );
};

lengthOfLastWord("   fly me   to   the moon  ");
