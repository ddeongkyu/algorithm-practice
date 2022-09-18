/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  //  nums1 = nums1.sort();
  // nums2 = nums2.sort();
  //   const length = nums1.length >= nums2.length ? nums1.length : nums2.length;
  const long = nums1.length >= nums2.length ? nums1 : nums2;
  const short = nums1.length >= nums2.length ? nums2 : nums1;
  console.log("long", long);
  console.log("short", short);
  //   console.log(long);
  //   console.log(short);
  //   let middle = [];
  //   let idx = 0;
  //   for (let i = 0; i < short.length; i++) {
  //     for (let j = 0; j < long.length; j++) {
  //       if (short.includes(long[i])) {
  //         //  console.log(long[i]);
  //       }
  //       //   if (long[i] === short[i]) {
  //       //     middle.push(long[i]);
  //       //   }
  //     }
  //   }
  //   // console.log("middle : ", middle);
  //   //  let dif = nums1.filter((x) => nums2.includes(x));
  //   console.log(short.filter((x) => long.includes(x)));
  //   //return middle;
  let a = new Map();
  //   for (let j = 0; j < short.length; j++) {
  //     for (let i = 0; i < long.length; i++) {
  //       console.log("i : ", i);
  //       console.log("j : ", j);
  //       if (!a.has(short[i])) {
  //         a.set(short[i], long[j]);
  //       } else if (a.has(short[i])) {
  //         //  console.log("a.has(short[i])");
  //         a.set(short[i], a.get(short[i]) + 1);
  //       }
  //     }
  //   }

  //   for (let i = 0; i < short.length; i++) {
  //     console.log(a);
  //     for (let j = 0; j < long.length; j++) {
  //       if (!a.has(short[i]) && short[i] === long[j]) {
  //         a.set(short[i], 1);
  //         long.splice(j, 1);
  //       } else if (a.has(short[i]) && short[i] === long[j]) {
  //         a.set(short[i], a.get(short[i]) + 1);
  //         long.splice(j, 1);
  //       }
  //     }
  //   }
  //   console.log(long);
  //   console.log(a);

  let dif = short.filter((x) => long.includes(x));
  console.log(dif);
  console.log([1, 1].filter((x) => [1, 2].includes(x)));
};

console.log(intersect([1, 2], [1, 1]));
