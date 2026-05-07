const checkSorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] > arr[i]) continue;
    //if (arr[0 + 1] > arr[0])
    // if (arr[1] > arr[0])
    // if (2 > 1),
    // if
    else return false;
  }

  return true;
};

// let arr = [1, 2, 3, 4, 5];
let arr = [1, 2, 3, 4, 5];
console.log(checkSorted(arr));
