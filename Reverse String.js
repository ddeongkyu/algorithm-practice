/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // 짜르고 넣기 Version. 풀이 1
  //   let iphone = [];
  //   for (let i = s.length - 1; i >= 0; i--) {
  //     iphone.push(s.splice(i, 1)[0]);
  //   }
  //   for (let i = 0; i < iphone.length; i++) {
  //     s.push(iphone[i]);
  //   }
  //   console.log(iphone);
  //   console.log(s);

  // 자리바꾸기 Version. 풀이 2
  let middle = 0;
  let storage;
  for (let i = s.length - 1; i >= Math.floor(s.length / 2); i--) {
    //   console.log(s);
    // console.log("middle : ", middle);
    //  console.log("storage before : ", storage);
    storage = s[middle];
    s[middle] = s[i];
    s[i] = storage;
    middle++;
    // console.log("storage after : ", storage);
  }
  console.log(s);
  //   console.log(s.length - 1);
  //   console.log(Math.floor(s.length / 2) + 1);
};

console.log(reverseString(["a", "b", "c", "e", "f"]));
