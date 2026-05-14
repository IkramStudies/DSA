/*
Input: [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
*/
function maximumSubarray(arr) {
  let maxSum = -Infinity;
  // maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    // i = 0; 0  < 9
    let currentSum = 0;
    // currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      // let j = 0; 0 < 8, true
      // j++;
      // j = 1; 1 < 8;
      currentSum += arr[j];
      //currentSum += arr[1]
      //  currentSum += arr[0]
      // currentSum = currentSum + arr[0]
      // currentSum = 0 + (-2)
      // currentSum = -2
      if (currentSum > maxSum) {
        // if (-2 > -Infinity)
        maxSum = currentSum;
        // maxSum = -2;
      }
    }
  }
  return maxSum;
}
console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
