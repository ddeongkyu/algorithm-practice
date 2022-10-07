/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address
    .split("")
    .map((a) => (a === "." ? "[.]" : a))
    .join("");
};

console.log(defangIPaddr("1.1.1.1"));
