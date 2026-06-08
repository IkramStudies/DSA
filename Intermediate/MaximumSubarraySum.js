const maximumSub = (arr) => {
  let maxSum = -Infinity;
  let sum = 0;
  let startingIndex = 0;
  let endingIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum > maxSum) {
        maxSum = sum;
        startingIndex = i;
        endingIndex = j;
      }
    }
  }
  return arr.slice(startingIndex, endingIndex + 1);
};

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maximumSub(arr));
