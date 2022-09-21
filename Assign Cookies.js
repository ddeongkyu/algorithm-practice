/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  if (!s.length) {
    return 0;
  }
  console.log("g : ", g);
  console.log("s : ", s);
  let i = 0;
  let j = 0;
  while (i < g.length && j < s.length) {
    console.log("inner i : ", i);
    console.log("inner j : ", j);
    console.log("ingger g[i] : ", g[i]);
    console.log("inner s[j] : ", s[j]);
    console.log("g[i] <= s[j] ? :", g[i] <= s[j]);
    if (g[i] <= s[j]) {
      i++;
    }
    j++;
  }
  console.log(`i : ${i}`);
};

console.log(findContentChildren([1, 2, 3, 5, 1, 2], [1, 1, 2, 3, 5]));
