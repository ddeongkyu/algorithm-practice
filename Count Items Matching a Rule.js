/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  const number =
    ruleKey === "type"
      ? 0
      : ruleKey === "color"
      ? 1
      : ruleKey === "name"
      ? 2
      : null;
  console.log(number);
  for (let i = 0; i < items.length; i++) {
    if (items[i][number] === ruleValue) {
      count++;
    }
  }
  return count;
};

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
);
