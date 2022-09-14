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
  const open = ["{", "(", "["];
  if (s.length === 1) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    console.log("i : ", i);
    if (open.includes(s[i])) {
      checked.push(s[i]);
    }
    if (s[i] === ")") {
      checked[checked.length - 1] === "(" ? checked.pop() : checked.push(s[i]);
    }
    if (s[i] === "}") {
      checked[checked.length - 1] === "{" ? checked.pop() : checked.push(s[i]);
    }
    if (s[i] === "]") {
      checked[checked.length - 1] === "[" ? checked.pop() : checked.push(s[i]);
    }
  }
  checked.length === 0 ? (result = true) : (result = false);
  return result;
};
console.log(isValid("()[]{}"));
