const nationalflagalgorithm = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] == 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      mid++;
      low++;
    } else if (arr[mid] == 1) mid++;
    else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
};

let arr = [2, 0, 2, 1, 1, 0];
