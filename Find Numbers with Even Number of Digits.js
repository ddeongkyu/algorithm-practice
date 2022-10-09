/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let res = 0;
  let a = nums.map((a) => a + "");
  let b = a.map((a) => a.split(""));
  b.map((a) => a.length % 2 === 0 && res++);
  console.log(b);
  console.log("res : ", res);
};
console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));
