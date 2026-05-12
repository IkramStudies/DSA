/*
Input:
arr1 = [1, 3, 5]
arr2 = [2, 4, 6]

Output:
[1, 2, 3, 4, 5, 6]

Input:
arr1 = [1, 2, 7]
arr2 = [3, 4, 5]
Output:
[ 4, 2, 5, 3, 7, 1]
let newArr = [...arr1, ...arr2];
let arr2 = [];
// adding the smallest number to the start
for (let i = 0; i < newArr.length; i++)
{
  if (arr[i] < arr[i + 1])
  else if (arr[i + 1] < arr[i])
    lowest = arr[i + 1];
}
for (let j = 0; j < newArr.length; j++)
{
  for (let i = 1; i < newArr.length; i++)
  {
  if (arr[j] > lowest && arr[j] < arr[i])
  {
    lowest = newArr[j]; 
    newArr.push(arr[j]);
  }
  }
}


for (let i = 0; i < arr.length; i++)
{
  for (let j = 0; j < arr.length; j++)
  {
    if (arr[i] < arr[j])
     newArr.push(arr[i]);
  }
}
// 
*/
// const mergeTwoSorted = (arr1, arr2) => {
//   let newArr = [...arr1, ...arr2];
//   let smallest = +Infinity;
//   for (let i = 0; i < newArr.length; i++) {
//     for (let j = 0; j < newArr.length; j++) {
//       if (newArr[i] < newArr[j] && newArr[i] < smallest) smallest = newArr[i];
//     }
//   }
// };
/*

*/
//[2, 3, 4, 1, 7, 6, 8, 5];
//[1, 2, 3, 4, 5, 6, 7];
// if (newArr[i] < newArr[j] && newArr[i] > arr3[i])
// console.log(mergeTwoSorted([2, 3, 4, 1], [7, 6, 8, 5]));
/*
for (let i = 0; i < newArr.length; i++)
{
  for (let j = 0; j < newArr.length; j++)
  {
    if (newArr[i] < newArr[j])
      arr3.push(newArr[i])    
  }
}
*/
