/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  if (paths.length === 1) {
    return paths[0][1];
  }
  let start = paths.map((a) => a[0]);
  let desti = paths.map((a) => a[1]);
  let final = desti.filter((a) => start.indexOf(a) === -1);
  return final[0];
};

console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);

console.log(
  destCity([
    ["B", "C"],
    ["D", "B"],
    ["C", "A"],
  ])
);
