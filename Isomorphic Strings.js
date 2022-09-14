/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  let airpod = {};
  for (let i = 0; i < s.length; i++) {
    console.log(`s[i] : ${s[i]}`);
    console.log(`t[i] : ${t[i]}`);
    if (!airpod[s[i]]) {
      airpod[s[i]] = t[i];
      console.log(airpod);
    } else if (airpod[s[i]] !== t[i]) {
      return false;
    }
  }
  return new Set([...t]).size === Object.keys(airpod).length;
};

console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
