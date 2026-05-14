let arr = [1, 2, 3, 4, 5];
const secondLargest = (arr1) => {
  let largest = 0;
  // largest = 0;
  let second = 0;
  // second = 0;
  for (let i = 0; i < arr1.length; i++) {
    // i = 0; 0 < 5
    if (arr1[i] > largest) {
      second = largest; // i forgot to use this
      largest = arr1[i];
    }
    // if (arr[0] > 0) largest = 1
    if (arr1[i] > second && arr1[i] != largest) second = arr1[i];
    // if (arr[0] > 0 && arr[0] != 1)
    // 1 > 0 && 1 != 1) false
    // i++
    // i = 1; 1 < 5
    // if (arr[1] > 1) largest = arr[1]
    // if (2 > 1) largest =
  }
  return second;
};

console.log(secondLargest(arr));
