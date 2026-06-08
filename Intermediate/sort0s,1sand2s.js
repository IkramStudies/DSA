/*
Input:
[2, 0, 2, 1, 1, 0]

Output:
[0, 0, 1, 1, 2, 2]
*/
const sort = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    }
    if (arr[i] == 1) mid++;
    else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
};
