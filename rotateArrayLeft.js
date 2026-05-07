/*
/*
Input:
[10, 20, 30, 40, 50]
Output:
[20, 30, 40, 50, 10]
*/
/*
let newArr = [];
for (let i = 0; i < arr.length - 1; i++)
{
  //i = 0; 0 < 5,
  if (i < arr.length - 2)
// if (0  < arr.length - 2)
  // if (0 < 3)
    newArr.push(arr[i + 1]) 
  // newArr.push(arr[1]) 
  // newArr.push(20)
  // i++
  // i = 1, 1 < 5
  // if ( 1 < 3)
  // newArr.push(arr[1 + 1]);
  // newArr.push(arr[2]);
  // newArr.push(30);
  // newArr = [20, 30];
  // i++
  // i = 2, 2 < 5
  // if ( 2 < 3), true
  // newArr.push(arr[2 + 1])
  // newArr.push(arr[3])
  // newArr.push(40)
  // newArr = [20, 30, 40]
  // i++;
  // i = 3
  if (i == arr.length - 2)
    newArr.push(arr[arr.length - 1])
  if (i == 5 - 2)
    newArr.push(arr[5 - 2])
    newArr.push(arr[3])
  else or if (i == arr.length - 1)
    newArr.push(arr[0])
}
*/
const rotateArrayLeft = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    // i = 0; 0 < 5, true
    // i = 1, 1 < 5, true
    if (i < arr.length - 1) newArr.push(arr[i + 1]);
    // if (0 < 5 - 2) newArr.push(arr[1]);
    // if (0 < 3) newArr.push(2);
    // i++;
    // if (1 < 3) newArr.push(arr[2]);
    // if (1 < 3) newArr.push(3);
    // i++;
    // if (2 < 3) newArr.push(arr[3]);
    // if (2 < 3) newArr.push(4);
    else {
      newArr.push(arr[arr.length - 1]);
      newArr.push(arr[0]);
    }
    /*
    i = 4; 4 < 5
    else 
      newArr.push(arr[0])
      newArr.push(arr[arr.length - 1])
    i++;
    i = 5;
     5 < 5, false
    */
  }
  return newArr;
};

let arr = [1, 2, 3, 4, 5];
console.log(rotateArrayLeft(arr));
