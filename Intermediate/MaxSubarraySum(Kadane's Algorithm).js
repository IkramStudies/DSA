let maxSubArraySum = (arr) => {
  let sum = arr[0];
  let maxSum = arr[0];
  let startingIndex = 0;
  let endingIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i] + sum) {
      sum = arr[i];
      startingIndex = i;
    } else {
      sum += arr[i];
    }
    if (sum > maxSum) {
      maxSum = sum;
      endingIndex = i;
    }
  }
  return arr.slice(startingIndex, endingIndex + 1);
};

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArraySum(arr));
