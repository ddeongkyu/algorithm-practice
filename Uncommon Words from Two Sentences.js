/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  // 일반적으로 s1, s2로 푸는법
  let res = [];
  let obj = {};
  s1 = s1.split(" ");
  s2 = s2.split(" ");
  console.log(s1);
  console.log(s2);
  for (let i = 0; i < s1.length; i++) {
    if (!obj[s1[i]]) {
      obj[s1[i]] = 1;
    } else {
      obj[s1[i]]++;
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (!obj[s2[i]]) {
      obj[s2[i]] = 1;
    } else {
      obj[s2[i]]++;
    }
  }
  let a = Object.entries(obj).filter((a) => a[1] === 1);
  console.log(a);
  for (let i = 0; i < a.length; i++) {
    res.push(a[i][0]);
  }
  console.log(res);
  return res;

  //S3 로 푸는법
  //   let res = [];
  //   let obj = {};
  //   let s3 = s1.trim() + " " + s2.trim()
  //   console.log(s3)
  //   s3 = s3.trim().split(" ")
  //   console.log(s3)
  //   // s1 = s1.split(" ")
  //   // s2 = s2.split(" ")
  //   // console.log(s1)
  //   // console.log(s2)
  //   for(let i = 0; i < s3.length; i++) {
  //     if(!obj[s3[i]]) {
  //       obj[s3[i]] = 1;
  //     } else {
  //       obj[s3[i]] ++
  //     }
  //   }
  //   console.log('obj : ', obj)
  //   let a = Object.entries(obj).filter(a => a[1] === 1)
  //   console.log('a',a)
  //   for(let i = 0; i < a.length; i++) {
  //     res.push(a[i][0])
  //   }
  //   console.log(res)
  //   return res;
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
