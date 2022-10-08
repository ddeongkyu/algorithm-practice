/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  if (!arr.includes(0)) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
  }
  return arr;
  // let pengsoo = new Array(arr.length)
  // let idx = 0;
  // let i = 0;
  // while(pengsoo.includes(undefined)) {
  //   if(arr[idx] !== 0) {
  //     pengsoo[i] = arr[idx]
  //   } else {
  //     pengsoo[i] = 0
  //     i++
  //     pengsoo[i] = 0
  //   }
  //   i++
  //   idx++
  // }
  // return pengsoo
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
