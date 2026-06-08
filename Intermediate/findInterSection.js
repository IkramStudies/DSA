/*
// Input
[1, 2, 3, 4]
[5, 6, 4, 3]
// Output
[3, 4]
*/
const findInterSection = (arr1, arr2) => {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j < arr2.length; j++) {
      if (arr1[i] == arr2[j] && !newArr.includes(arr1[i])) newArr.push(arr1[i]);
    }
  }
  return newArr;
};

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 4];
console.log(findInterSection(arr1, arr2));
