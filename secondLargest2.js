const secondLargest = (arr) => {
  let largest = -Infinity;
  let second = 0;
  for (let i = 0; i < arr.length; i++) {
    // i = 0; 0 < 5
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    }
    // if (arr[0] > -Infinity)
    // if (1 > -Infinity) largest = arr[0]
    // true, largest = 1
    if (arr[i] < largest && arr[i] > second) second = arr[i];
    // if (arr[0] < 1 && arr[0] > 0)
    // if (1 < 1 && 1 > 0)
    // i++;
    // i = 1, 1 < 5
    // if (arr[1] > largest) largest = arr[1]
    // if (2 > 1) largest = 2
    // if (arr[1] < 2 && arr[1] > second)
    // if (2 < 2 && 2 > )
  }
  return second;
};

let arr = [1, 2, 3, 4, 5];
console.log(secondLargest(arr));
