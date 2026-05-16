const sort = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    // If element is 0
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    }

    // If element is 1
    else if (arr[mid] === 1) {
      mid++;
    }

    // If element is 2
    else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
};

let arr = [2, 0, 1, 2, 1, 0];

console.log(sort(arr));
