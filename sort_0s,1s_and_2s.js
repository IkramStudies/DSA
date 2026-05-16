/*
Input:
[2, 0, 1, 2, 1, 0]
Output:
[0, 0, 1, 1, 2, 2]
let newArr = [];
for (let i = 0; i < arr1.length; i++)
{
  for (let j = 0; j < arr1.length; j++)
  {
    if (arr[i] < arr[j] && arr[i] != arr[j])
      newArr.push(arr[i]);
  }
}
*/
// started at 11:19 am
// const sort = (arr) => {
//   let index = 0;
//   for (let i = 0; i < arr.length; i++)
//     if (arr[i] == 0) {
//       arr[index] = arr[i];
//       index++;
//     }
//   for (let j = 0; j < arr.length; j++)
//     if (arr[j] == 1) {
//       arr[index] = arr[j];
//       index++;
//     }
//   for (let k = 0; k < arr.length; k++)
//     if (arr[k] == 2) {
//       arr[index] = arr[k];
//       index++;
//     }
//   return arr;
// };
// let arr = [2, 0, 1, 2, 1, 0];
// console.log(sort(arr));
// [0, 0, 1, 1, 2, 2]
//Saw the solution after lunch , stayed with the question for 45 mins
// updated code
const sortArray = (arr) => {
  let zeroCount = 0;
  let oneCount = 0;
  let twoCount = 0;

  // Count 0s, 1s, and 2s
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else if (arr[i] === 1) {
      oneCount++;
    } else {
      twoCount++;
    }
  }

  let index = 0;

  // Add 0s
  for (let i = 0; i < zeroCount; i++) {
    arr[index] = 0;
    index++;
  }

  // Add 1s
  for (let i = 0; i < oneCount; i++) {
    arr[index] = 1;
    index++;
  }

  // Add 2s
  for (let i = 0; i < twoCount; i++) {
    arr[index] = 2;
    index++;
  }

  return arr;
};

let arr = [2, 0, 1, 2, 1, 0];

console.log(sortArray(arr));
