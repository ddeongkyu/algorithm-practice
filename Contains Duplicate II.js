var containsNearbyDuplicate = function (nums, k) {
  //   let airpod = [];
  //   let iphone12ProMax = [];
  //   let result = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        console.log("i - j", Math.abs(i - j));
        if (Math.abs(i - j) <= k) {
          return true;
        }
      }
    }
  }
  //   console.log(airpod);
  //   for (let i = 0; i < airpod.length; i++) {
  //     let appleWatch = Math.abs(airpod[i][0] - airpod[i][1]);
  //     console.log(`appleWatch : ${appleWatch}`);
  //     appleWatch <= k ? iphone12ProMax.push(appleWatch) : null;
  //   }
  //   console.log(iphone12ProMax);
  //   iphone12ProMax.length ? (result = true) : (result = false);
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
