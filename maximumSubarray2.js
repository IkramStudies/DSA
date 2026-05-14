const maximumSubarray = (arr) => {
  let maxSum = -Infinity;
  let currentSum;
  for (let i = 0; i < arr.length; i++) {
    currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      if (currentSum > maxSum) maxSum = currentSum;
    }
  }
};
