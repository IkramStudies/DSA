//last attempted 18-05-2026
const sort = (arr) => {
  let low = 0;
  // low = 0;
  let mid = 0;
  // mid = 0;
  let high = arr.length - 1;
  // high = 5;
  while (mid <= high) {
    // while (0 <= 5), true
    // while (0 <= 4), true
    // while (1 <= 4), true
    // while (2 <= 4), true
    // while (3 <= 4), true
    if (arr[mid] === 0) {
      //if (arr[mid] === 0)
      //if (arr[0] === 0)
      //if (2 === 0), false
      //if (arr[1] === 0)
      //if (0 === 0), true
      //if (arr[1] === 0) , true
      //if (arr[3] === 0)
      //if (2 === 0), false
      //if (arr[4] === 0),
      //if (2 === 0), false
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      // [arr[0], arr[0]] = [arr[0], arr[0]];
      // arr = [0, 0, 1, 2, 1, 2]
      // [arr[1], arr[1]] = [arr[1], arr[1]];
      low++;
      // low = 0 + 1;
      // low = 1;
      // low = 1 + 1;
      // low = 2;
      mid++;
      // mid = 0 + 1;
      // mid = 1;
      // mid = 1 + 1;
      // mid = 2;
    } else if (arr[mid] === 1) {
      // else if (arr[mid] === 1)
      // else if (arr[0] === 1)
      // else if (2 === 1), false
      // else if (arr[2] === 1)
      // else if (1 === 1), true
      // else if (arr[3] === 1)
      // else if (2 === 1), false
      // else if (arr[4] === 1)
      // else if (2 === 1), false
      mid++;
      //mid++;
      //mid = 2 + 1;
      //mid = 3;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      // [arr[0], arr[5]] = [arr[5], arr[0]];
      // [arr[0], arr[5]] = [0, 2]
      // arr[0] = 0;
      // arr = [0, 0, 1, 2, 1, 2];
      //[arr[3], arr[4]] = [arr[4], arr[3]]
      //[arr[3], arr[4]] = [1, 2];
      // arr = [0, 0, 1, 1, 2, 2];
      // [arr[4], arr[4]] = [arr[4], arr[4]]
      high--;
      // high = 5 - 1;
      // high = 4;
      // high = 3;
    }
  }

  return arr;
};

let arr = [2, 0, 1, 2, 1, 0];

console.log(sort(arr));
