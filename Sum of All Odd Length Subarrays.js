/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  let length = 1;
  while (arr.length >= length) {
    for (let i = 0; i < arr.length - length + 1; i++) {
      console.log(arr.length - length + 1);
      console.log(`i : ${i}`);
      for (let j = i; j < length + i; j++) {
        console.log(`j : ${j}`);
        sum += arr[j];
        console.log(`sum : ${sum}`);
      }
    }
    length += 2;
  }
  console.log(`sum : ${sum}`);
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
