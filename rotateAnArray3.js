/*
function rotateRightInPlace(arr, k) {
  const n = arr.length;
  // n = 5;
  k %= n;

  reverse(arr, 0, n - 1);
  reverse(arr, 0, 4);
  reverse(arr, 0, k - 1);
  reverse(arr, 0, 1);
  reverse(arr, k, n - 1);

  return arr;
}

function reverse(arr, left, right) {
  while (left < right) {
  while (0 < 4),true
  while (1 < 3), true
    [arr[left], arr[right]] = [arr[right], arr[left]];
    [arr[0], arr[4]] = [arr[4], arr[0]];
    left++;
    0++;
    1;
    right--;
    4--;
    3;
  }
}

// Example
const arr = [1, 2, 3, 4, 5];

console.log(rotateRightInPlace(arr, 2));
// [4, 5, 1, 2, 3]
*/

const rotate = (arr, k) => {
  let n = arr.length;
  k = k % n;
  // k = 2 % 5;
  // k = 2;
  reverse(arr, 0, n - 1);
  // reverse(arr, 0, 4);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  return arr;
};

const reverse = (arr, left, right) => {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
};
let arr = [1, 2, 3, 4, 5];
console.log(rotate(arr, 2));
