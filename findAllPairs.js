/*
Input:
arr = [1, 2, 3, 4, 5]
target = 6

Output:
[[1, 5], [2, 4]]
let newArr = [];
let arr1 = [];
for (let i = 0; i < arr.length; i++)
{
  for (let j = 0; j < arr1.length; j++)
  {
    if (arr[i] + arr[j] == target)
      arr1 = [...arr[i],...arr[j]];
  }
  return newArr;
}
*/
const findAllPairs = (arr, target) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        newArr.push([arr[i], arr[j]]);
      }
    }
  }
  return newArr;
};
let arr = [1, 2, 3, 4, 5];
console.log(findAllPairs(arr, 6));
/*
[ [ 1, 5 ], [ 2, 4 ], [ 3, 3 ], [ 4, 2 ], [ 5, 1 ] ]

*/

const findAllPairs = (arr, target) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        newArr.push([arr[i], arr[j]]);
      }
    }
  }

  return newArr;
};

let arr = [1, 2, 3, 4, 5];

console.log(findAllPairs(arr, 6));
