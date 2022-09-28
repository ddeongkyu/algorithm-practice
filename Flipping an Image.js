/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  //  console.log(image.map(a => a.map(b => !b ? 1 : 0)))
  let storage = 0;
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length / 2; j++) {
      if (image[i].length % 2 === 0) {
        storage = image[i][j];
        console.log("storage : ", storage);
        image[i][j] = image[i][image[i].length - j - 1];
        image[i][image[i].length - j - 1] = storage;
        console.log("j - 1 : ", j - 1);
        storage = 0;
      } else {
        storage = image[i][j];
        console.log("storage : ", storage);
        image[i][j] = image[i][image[i].length - j - 1];
        image[i][image[i].length - j - 1] = storage;
        console.log("idx : ", j - 1);
        storage = 0;
      }
    }
  }
  console.log(image);
  return image.map((a) => a.map((b) => (!b ? 1 : 0)));
};

console.log(
  flipAndInvertImage([
    [1, 1, 0, 1],
    [1, 0, 0],
    [0, 0, 0],
  ])
);
