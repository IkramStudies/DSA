/*
Input:
[1, 2, 2, 3, 4, 4, 5]
Output:
[1, 2, 3, 4, 5]

*/
const removeDuplicates = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i])) continue;
    else newArr.push(arr[i]);
  }
  return newArr;
};
let arr = [1, 2, 3, 4, 4, 5, 5];
console.log(removeDuplicates(arr));
/*
for (let i = 0; i < arr.length - 1; i++)
{
  if (newArr.includes(arr[i]))
    continue;
  else newArr.push(arr[i])
}
*/
