/*
Input:
arr1 = [1,2,7]
arr2 = [3,4,5]

Output:
[1,2,3,4,5,7]
smallest;
index; 
newArr; 
let index = 0;
let smallest = newArr[0];
newArr = [1, 2, 7, 3, 4, 5];
for (let i = 0; i < newArr.length; i++)
{
  for (let j = i; j < newArr.length; j++)
  {
    if (newArr[i] < newArr[j] && newArr[i] < smallest)
      smallest = newArr[i];
    else if (newArr[j] < arr[i] && newArr[j] < smallest)
      smallest = newArr[j];
  }
  newArr[index] = smallest;
  index++;
}
*/
// const mergeTwoSorted = (arr1, arr2) => {
//   let newArr = [...arr1, ...arr2];
//   // newArr = [1, 2, 6, 3, 4, 5];
//   let index = 0;
//   // index = 0;
//   let smallest = newArr[index];
//   // smallest = newArr[0]
//   // smallest = 1
//   for (let i = 0; i < newArr.length; i++) {
//     // i = 0; 0 < 6, true
//     for (let j = i; j < newArr.length; j++) {
//       // j = 0; 0 < 6, true
//       // j++
//       // j = 1;  1 < 6, true
//       if (newArr[i] < newArr[j] && newArr[i] < smallest) smallest = newArr[i];
//       // if (newArr[0] < newArr[0] && newArr[0] < smallest)
//       // if (1 < 1 && 1 < 1), false
//       // if (newArr[0] < newArr[1] && newArr[0] < 1)
//       // if (1 < 2 && 1 < 1), smallest = newArr[0];
//       else if (newArr[j] < newArr[i] && newArr[j] < smallest)
//         //else if (newArr[1 < newArr[0] && newArr[] )
//         smallest = newArr[j];
// smallest = newArr[0]
// smallest = 1
// smallest = newArr[1]
// smallest = 2
//     }
//     newArr[index] = smallest;
//     index++;
//   }
// };
// let arr1 = [1, 2, 6];
// let arr2 = [3, 4, 5];
// console.log(mergeTwoSorted(arr1, arr2));
// // [1, 2, 3, 4, 5, 6]
// Couldn't solve the question in 1 hour
//Here is the solution
// function mergeTwoSorted(a1, a2) {
//   let i = 0;
//   let j = 0;
//   let res = [];

//   while (i < a1.length && j < a2.length) {
//     if (a1[i] < a2[j]) {
//       res.push(a1[i]);
//       i++;
//     } else {
//       res.push(a2[j]);
//       j++;
//     }
//   }

//   // If any elements remain in a1 or a2, add them to the res
//   while (i < a1.length) {
//     res.push(a1[i]);
//     i++;
//   }

//   while (j < a2.length) {
//     res.push(a2[j]);
//     j++;
//   }

//   return res;
// }

// const a1 = [1, 3, 5, 7];
// const a2 = [2, 4, 6, 8];

// console.log(mergeTwoSorted(a1, a2));
const mergeTwoSorted = (arr1, arr2) => {
  let newArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    // while (0 < 3 && 0 < 3) , true
    // while (1 < 3 && 0 < 3) , true
    // while (2 < 3 && 0 < 3) , true
    // while (2 < 3 && 1 < 3), true
    // while (2 < 3 && 2 < 3), true
    // while (3 < 3 && 2 < 3), false
    if (arr1[i] < arr2[j]) {
      // if (arr1[0] < arr2[j])
      // if (1 < 3), true
      // if (arr1[1] < arr2[0])
      // if (2 < 3), true
      // if (arr1[2] < arr2[0])
      // if (6 < 3), false
      // if (arr1[2] < arr2[1])
      // if (6 < 5), false
      // if (arr1[2] < arr2[2])
      // if (6 < 8) , true
      newArr.push(arr1[i]);
      // newArr.push(arr[0]);
      // newArr.push(1);
      // newArr = [1];
      // newArr.push(arr[1]);
      // newArr.push(2);
      // newArr = [1, 2];
      // newArr.push(arr1[2]);
      // newArr.push(6);
      // newArr = [1, 2, 3, 5, 6];
      i++;
      // i++;
      // i = 1;
      // i++;
      // i = 2;
      // i++;
      // i = 3;
    } else {
      newArr.push(arr2[j]);
      // newArr.push(arr2[0])
      // newArr.push(3)
      // newArr = [1, 2, 3]
      // newArr.push(arr2[1]);
      // newArr.push(5);
      // newArr = [1, 2, 3, 5];
      j++;
      // j = 1;
      // j = 2;
    }
  }
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  return newArr;
};

let arr1 = [1, 2, 6];
let arr2 = [3, 5, 8];
console.log(mergeTwoSorted(arr1, arr2));
