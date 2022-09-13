// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function (s) {
  let checked = [];
  let result = true;
  //   if (s[0] === "]" || s[0] === ")" || s[0] === "}") {
  //     return false;
  //   }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      checked.push(s[i]);
    }
    if (s[i] === ")" && checked[checked.length - 1] === "(") {
      checked.pop();
    }
    if (s[i] === "}" && checked[checked.length - 1] === "{") {
      checked.pop();
    }
    if (s[i] === "]" && checked[checked.length - 1] === "[") {
      checked.pop();
    }
    // if (s[i] === "]" && !checked.includes("[")) {
    //   checked.push("이건 가짜에요");
    // }
    // if (s[i] === "}" && !checked.includes("{")) {
    //   checked.push("이건 가짜에요");
    // }
    // if (s[i] === ")" && !checked.includes("(")) {
    //   checked.push("이건 가짜에요");
    // }
  }
  checked.length === 0 ? (result = true) : (result = false);
  return result;
};
// isValid("[{{[{[{[]]");
console.log(isValid(")"));

// isValid("[{[");
// isValid("{[[]{}()]}");
// checked = ["[","{","["]
// ]
