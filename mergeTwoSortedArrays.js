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
const mergeTwoSorted = (arr1, arr2) => {
  let smallest = +Infinity;
  let newArr = [...arr1, ...arr2];
  let arr3 = [];
  for (let i = 0; i < newArr.length; i++) {
    // i = 0; i < 7; i++
    // 0 ; 0 < 7;
    for (let j = 0; j < newArr.length; j++) {
      // j = 0; j < 7; j++
      if (newArr[i] < newArr[j] && newArr[i] < smallest)
        //if (newArr[0] < newArr[0])
        //if (0 < 0)
        //j++;
        //if (newArr[0] < newArr[1])
        //if (1 < 3)
        //j++
        //j = 2; 2 < 7; j++
        //if (newArr[0] < newArr[2])
        //if (1 < 7)
        smallest = newArr[i];
      // smallest =
      // smallest = newArr[0]
    }
  }
  arr3.push(smallest);
  for (let m = 0; m < newArr.length; m++) {
    for (let n = 0; n < newArr.length; n++) {
      if (newArr[m] > smallest && newArr[n] < newArr[m]) {
        smallest = newArr[newArr.length - 1];
      }
      arr3.push(newArr[n]);
    }
  }
  return arr3;
};

console.log(mergeTwoSorted([1, 3, 7], [2, 4, 5, 6]));
