const subArraySum = (arr, target) => {
  let left = 0;
  let sum = 0;
  let result = [];

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > target) {
      sum -= arr[left];
      left++;
    }

    if (sum === target) {
      result.push(arr.slice(left, right + 1));
    }
  }

  return result;
};

console.log(subArraySum([1, 2, 3, 4, 5], 5));
