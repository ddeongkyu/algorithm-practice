/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let so = s.split("");
  let to = t.split("");
  let idx = 0;
  let res = [];
  for (let i = 0; i < so.length; i++) {
    for (let j = 0; j < to.length; j++) {
      if (so[i] === to[j]) {
        idx = to.indexOf(s[i]);
        to[j] = "";
        res.push(idx);
        so[i] = "";
        j++;
        i++;
      }
    }
  }
  return !so.join("").split("").length ? true : t.includes(s) ? true : false;
  //   if (s.join("").split("").length) {
  //     return false;
  //   }
  //   return res.join("") === res.sort((a, b) => a - b).join("") ? true : false;
};

console.log(isSubsequence("acb", "pppppppppppppacb"));
