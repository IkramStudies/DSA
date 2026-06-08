/*
Input:
[0, 1, 0, 3, 12]
Output:
[1, 3, 12, 0, 0]
*/
// This is how I did it
// const moveZero = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) if (arr[i] != 0) newArr.push(arr[i]);
//   for (let j = 0; j < arr.length; j++) if (arr[j] == 0) newArr.push(arr[j]);
//   return newArr;
// };
// console.log(moveZero([0, 1, 0, 3, 12]));
// Optimized code given by ChatGPT
const moveZero = (arr) => {
  // arr = [0, 1, 0, 3, 12]
  let index = 0;
  // index = 0;
  for (let i = 0; i < arr.length; i++) {
    // [0, 1, 0, 3, 12]
    // i = 0; 0 < 5
    if (arr[i] != 0) {
      // if (arr[0] != 0)
      // if (0 != 0), false
      // i++
      // i = 1
      // if (arr[1] != 0)
      // if (1 != 0) , true
      arr[index] = arr[i];
      // arr[index] = arr[1]
      // arr[0] = 1
      index++;
      // index++;
      // index = 1
      // i++;
      // i = 2;
      // if (arr[2] != 0)
      // if (0 != 0), false
      // i++
      // i = 3
      // if (arr[3] != 0)
      // if (3 != 0) , true
      // arr[index] = arr[3]
      // arr[1] = 3;
      // index++;
      // index = 2
      // i++:
      // i = 4;
      // 4 < 5, true
      // if (arr[4] != 0)
      // if (12 != 0), true
      // arr[2] = arr[4]
      // arr[2] = 12
      // index++;
      // index = 3;
      // i++;
      // i = 5
      // 5 < 5, false
    }
  }
  while (index < arr.length) {
    // while (3 < 5), true
    arr[index] = 0;
    index++;
  }
  return arr;
};
console.log(moveZero([0, 1, 2, 0, 4]));
