/*
// Input
[1, 2, 3, 4]
[3, 4, 5, 6]

// Output
[1, 2, 3, 4, 5, 6]

// Input
[1, 1, 2, 2]
[2, 3, 4]

// Output
[1, 2, 3, 4]
*/
//My approach
const findUnion = (arr1, arr2) => {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++)
    if (!newArr.includes(arr1[i])) newArr.push(arr1[i]);
  for (let j = 0; j < arr2.length; j++)
    if (!newArr.includes(arr2[j])) newArr.push(arr2[j]);
  return newArr;
};
console.log(findUnion([1, 2, 3, 4], [3, 4, 5, 6]));
// [];

/*
const findUnion = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};

console.log(findUnion([1, 2, 3, 4], [3, 4, 5, 6]));

*/
