/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const aBin = a.split("");
  const bBin = b.split("");
  let storage = 0;
  let result = [];
  let whatever = 0;
  if (a.length !== b.length) {
    a.length > b.length
      ? bBin.unshift(...new Array(a.length - b.length).fill(0))
      : aBin.unshift(...new Array(b.length - a.length).fill(0));
  }
  console.log("렝스 - 1 ", aBin.length - 1);
  console.log(bBin);
  for (let i = aBin.length - 1; i >= 0; i--) {
    console.log("i : ", i);
    whatever = Number(aBin[i]) + Number(bBin[i]);
    result[i] = whatever + storage;
    console.log("result[i] : ", result[i]);
    if (i !== 0) {
      if (result[i] === 3) {
        storage = 1;
        result[i] = 1;
      } else if (result[i] === 2) {
        storage = 1;
        result[i] = 0;
      } else if (result[i] === 1) {
        storage = 0;
        result[i] = 1;
      } else if (result[i] === 0) {
        storage = 0;
        result[i] = 0;
      }
    } else if (i === 0) {
      console.log("i는 0이에용");
      if (result[i] === 0) {
        console.log("result[i] === 0)");
        // 여기에 원소중에 1 없으면 걍 0 리턴하고, 1 있으면 언쉬프트
        if (result.includes("1")) {
          console.log("리저트 i 0인데, 1이 보이네요");
          result.unshift(1);
        } else if (!result.includes("1")) {
          result[i] = 0;
        }
      } else if (result[i] === 2) {
        result[i] = 0;
        result.unshift(1);
      } else if (result[i] === 3) {
        result[i] = 1;
        result.unshift(1);
      }
    }
    // console.log("result Array : ", result);
    // console.log("result : ", result.join(""));
  }
  return console.log("결과 : ", result.join(""));
};

addBinary("11", "1");
