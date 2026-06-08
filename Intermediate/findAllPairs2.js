const findAllPairs = (arr, target) => {
  let newArr = [];
  // newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // i = 0
    for (let j = i + 1; j < arr.length; j++) {
      // j = 0 + 1
      if (arr[i] + arr[j] === target) {
        // if (arr[0] + arr[1] === 6)
        // if (1 + 2 == 6), false
        // j++;
        // if (arr[0] + arr[2] === 6)
        // if (1 + 3 === 6) , false
        // j++
        // if (arr[0] + arr[3] === 6)
        // if (1 + 4 == 6)
        // if (5 == 6), false
        // if (arr[0] + arr[4] == 6)
        // if (1 + 5 == 6), true
        // j++, j = 5, 5 < 5, false
        // i++
        // i = 1;
        // j = i + 1
        // j = 2
        // if (arr[1] + arr[2] == 6)
        // if (2 + 3 == 6)
        // if (5 == 6), false
        // j++
        // if (arr[1] + arr[3] == 6)
        // if (2 + 4 == 6)
        // if (6 == 6), true
        // j++
        // if (arr[1] + arr[4] == 6)
        // if (2 + 5 == 6), false
        newArr.push([arr[i], arr[j]]);
        // newArr.push([2, 4])
        // newArr = [[2, 4]]
      }
    }
  }

  return newArr;
};

let arr = [1, 2, 3, 4, 5];

console.log(findAllPairs(arr, 6));
