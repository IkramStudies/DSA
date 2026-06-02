/*
Input:
[1, 2, 2, 3, 4, 1, 2, 3, 4, 5, 0]

Output:
[1, 2, 3, 4, 5]
*/

const increasingSub = (arr) => {
  let count = 1;
  let maxCount = 1;
  let endingIndex = 0;
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      count++;
      if (count > maxCount) {
        maxCount = count;
        endingIndex = i + 1;
      }
    } else {
      count = 1;
    }
  }
  let startIndex = endingIndex - maxCount + 1; // startingIndex = 9 + 1 - 5 = 4
  return arr.slice(startIndex, endingIndex + 1);
};

let arr = [1, 2, 2, 3, 4, 1, 2, 3, 4, 5, 0];
console.log(increasingSub(arr));

/*

[1, 2, 2, 3, 4, 1, 2, 3, 4, 5];

*/
