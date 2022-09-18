/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1 = nums1.sort();
  nums2 = nums2.sort();
  const long = nums1.length >= nums2.length ? nums1 : nums2;
  const short = nums1.length >= nums2.length ? nums2 : nums1;
  console.log(long);
  console.log(short);
  let middle = [];
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i] === short[j]) {
        middle.push(long[i]);
      }
    }

    // if (long[i] === short[idx]) {
    //   middle.push(long[i]);
    //   idx++;
    // }
  }
  console.log(middle);
  return [...new Set(middle)];
  //   const airpod = [...new Set(middle)];
  //   return airpod;
  //   let dif = nums1.filter((x) => nums2.includes(x));
  //   console.log(dif);
  // 구글링 했더니 나온 풀이... => 교집합 구하는 방법이라넹 (dif)
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
