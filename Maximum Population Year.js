/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  let obj = {};
  for (let i = 0; i < logs.length; i++) {
    let mm = logs[i][1] - logs[i][0] - 1;
    let aa = logs[i][0];
    while (mm >= 0) {
      //  console.log(`mm : ${mm}`)
      //  console.log('aa : ', aa)
      if (!obj[aa]) {
        obj[aa] = 1;
      } else if (obj[aa]) {
        obj[aa]++;
      }
      aa++;
      mm--;
    }
  }
  let bb = Object.entries(obj)
    .filter((a) => a[1] === Math.max(...Object.values(obj)))
    .map((a) => Number(a[0]));
  return Math.min(...bb);
};
console.log(
  maximumPopulation([
    [1950, 1961],
    [1960, 1971],
    [1970, 1981],
  ])
);
console.log(
  maximumPopulation([
    [1993, 1999],
    [2000, 2010],
  ])
);
