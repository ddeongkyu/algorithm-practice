/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let res = [];
  for (let i = 0; i < emails.length; i++) {
    let bb = emails[i].split("@")[0].includes("+")
      ? emails[i]
          .split("@")[0]
          .substring(0, emails[i].split("@")[0].indexOf("+"))
          .replace(/[.]/g, "")
      : emails[i].split("@")[0].replace(/[.]/g, "");
    let cc = emails[i].split("@")[1];
    console.log("concat : ", bb + "@".concat(cc));
    console.log("bb : ", bb);
    if (!res.includes(bb + "@".concat(cc))) {
      res.push(bb + "@".concat(cc));
    }
  }
  console.log(res);
  return res.length;
  // console.log(middle[0][0].substring(0, middle[0][0].indexOf("+")))
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.email.leet+alex@code.com",
  ])
);
