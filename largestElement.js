const arr = [1, 2, 3, 4, 5, 6];
const largest = (arr1) => {
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
};

console.log(largest(arr));
