//question started at 12:02 PM
/*
Array = [1, 2, 3, 4, 5]
k = 2
output = [4, 5, 1, 2, 3]
let index = 0;
for (let i = 0; i < arr.length; i++)
{
  if (i < arr.length - 2)
  {
    [arr[i], arr[]]
    [arr[0], arr[arr.length - 2]] = [arr[index], arr[0]];
  //[arr[0], arr[3]] = [arr[3], arr[0]]
  //[arr[0], arr[3]] = [4, 1] 
  // arr = [4, 2, 3, 1, 5]
    [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
  index++;
  // index = 1;
  }
}
*/
let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(3));
function rotateRight(arr, k) {
  const n = arr.length;
  // n = 5
  //k = k % n;
  // k = 2 % 5;
  // 2 divided by 5 , what is the remainder
  // k = 2;
  return arr.slice(n - k).concat(arr.slice(0, n - k));
  //return [1, 2, 3, 4, 5].slice(-2).concat(arr.slice(0, 5 - 2))
  // [4, 5].concat(arr.slice(0, 3));
  // [4, 5].concat([1, 2, 3, 4, 5].slice(0, 3));
  // [4, 5].concat([])
}

console.log(rotateRight([1, 2, 3, 4, 5], 2));
// [4, 5, 1, 2, 3]
