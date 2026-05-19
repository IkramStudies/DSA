/*
low points to where the next 0 should be.
mid points to the current element.
high points to where the next 2 should be.
*/
// last attempted 18-05-2026
const sort = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] == 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
};

let arr = [2, 0, 1, 2, 1, 0];
console.log(sort(arr));
