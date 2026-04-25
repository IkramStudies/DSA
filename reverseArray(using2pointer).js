function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  // right = 4;
  for (; left < right; ) {
    // while (0 < 4)
    [arr[left], arr[right]] = [arr[right], arr[left]];
    //[arr[0], arr[4]] = [arr[4], arr[0]]
    left++;
    right--;
  }
  return arr;
}
let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));
