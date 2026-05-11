/*
Input:
arr = [1, 2, 3, 4, 5]
k = 2

Output:
[4, 5, 1, 2, 3]

Input:
arr = [10, 20, 30, 40, 50]
k = 1

Output:
[50, 10, 20, 30, 40]

Input:
arr = [1, 2, 3, 4, 5, 6]
k = 3

Output:
[4, 5, 6, 1, 2, 3]
const rotateArrayByK = (arr, k) => {  
  let newArr = [];
  for (let i = k + 1; i < arr.length; i++)
    newArr.push(arr[i]);
  for (let j = 0; j < k + 1; j++)
    newArr.push(arr[j]); 
}
*/
// question started at 9:40 A.M
// question finished at 10:47 A.M
const rotateArrayByK = (arr, k) => {
  let newArr = [];
  for (let j = arr.length - k; arr.length > j; j++) newArr.push(arr[j]);
  // for (let j = 5 - 1; 5 > j; j++) newArr.push(arr[4])
  // for (let j = 4; 5 > 4; j++) newArr.push(arr[4])
  // newArr = [5]
  for (let i = 0; i < arr.length - k; i++) newArr.push(arr[i]);
  //for (let i = 0; i < 4; i++) newArr.push(arr[0]);
  // newArr.push(arr[0]);
  // newArr.push(1);
  // newArr = [5, 1];
  // i++;
  // 1 < 4; newArr.push(arr[1]);
  // newArr.push(2);
  // newArr = [5, 1, 2];
  // i++;
  // i = 2;
  // 2 < 4; newArr.push(arr[2]);
  // newArr = [5, 1, 2, 3];
  // i++
  // i = 3
  // 3 < 4
  // newArr.push(arr[3])
  // newArr.push(4);
  // newArr = [5, 1, 2, 3, 4];
  return newArr;
};
let newArr = [1, 2, 3, 4, 5];
//output: [5, 1, 2, 3, 4]
console.log(rotateArrayByK(newArr, 1));
