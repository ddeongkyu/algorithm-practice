/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  // let idx = 0;
  // for(let i = 0; i < typed.length; i++) {
  //   console.log(`idx: ${idx}`)
  //   if(typed[i] === name[idx]) {
  //     idx++
  //   } else if (typed[i] === name[idx-1]) {
  //     console.log('idx -1 : ',idx-1)
  //     continue;
  //   } else {
  //     return false;
  //   }
  // }
  // return idx === name.length;
  let i = 0;
  let prev = "";
  for (let a of typed) {
    if (a === name[i]) {
      i++;
    } else if (prev !== a) {
      return false;
    }
    prev = a;
  }
  return i === name.length;
};

console.log(isLongPressedName("alex", "aaleex"));
