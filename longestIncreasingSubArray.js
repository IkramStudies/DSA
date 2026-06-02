const longestSub = (arr) => {
  let count = 1;
  let maxCount = 1;
  let endingIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) count++;
    if (count > maxCount) {
      maxCount = count;
      endingIndex = i + 1;
    } else {
      count = 1;
    }
  }
  let startingIndex = endingIndex - maxCount + 1;
  return arr.slice(startingIndex, endingIndex + 1);
};

let arr = [1, 2, 2, 3, 4, 1, 2, 3, 4, 5, 0];
console.log(longestSub(arr));
