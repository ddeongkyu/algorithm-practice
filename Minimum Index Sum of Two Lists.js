/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let res = new Map();
  let finalArr = [];
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j]) {
        res.set(list1[j], i + j);
      }
    }
  }
  console.log(res);
  const minValue = Math.min(...res.values());
  for (const [key, value] of res) {
    if (value === minValue) {
      finalArr.push(key);
    }
  }
  console.log("ㅊ초ㅣ종 : ", finalArr);
};

console.log(findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"]));
