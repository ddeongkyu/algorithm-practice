/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let sorted = [...score].sort((o, q) => q - o);
  console.log("score top : ", score);
  console.log("ㅅ소ㄹ트한 배ㄹ : ", sorted);
  for (let i = 0; i < score.length; i++) {
    if (score[i] === sorted[0]) {
      score[i] = "Gold Medal";
    } else if (score[i] === sorted[1]) {
      score[i] = "Silver Medal";
    } else if (score[i] === sorted[2]) {
      score[i] = "Bronze Medal";
    } else {
      score[i] = String(sorted.indexOf(score[i]) + 1);
      console.log("sorted.indexOf(score[i]) : ", sorted.indexOf(score[i]));
    }
  }
  console.log("res : ", score);
};

console.log(findRelativeRanks([10, 3, 8, 9, 4]));
