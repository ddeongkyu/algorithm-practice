/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  let a = Math.floor(Math.sqrt(area));
  console.log(a);
  if (Number.isInteger(Math.sqrt(area)) && Math.sqrt(area) ** 2 === area) {
    return [Math.sqrt(area), Math.sqrt(area)];
  }
  console.log("체크용");
  console.log("area%a : ", area % a);
  while (area % a !== 0) {
    console.log("iner : ", a);
    a--;
  }
  return [area / a, a];
};

console.log(constructRectangle(122122));
