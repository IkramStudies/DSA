/*
// Input
[2, 2, 1, 1, 2, 2, 2]
// Output
2
*/
//question started at 3:00 PM
/*
let freq = {}
for (let num of arr)
{
  if (!freq[num]) freq[num] = 1;
  else freq[num]++;
  if (freq[num] > Math.ceil(arr.length/2))
    return num;
}
*/
//Approach that I used
// const findMajority = (arr) => {
//   let freq = {};
//   for (let num of arr) {
//     if (!freq[num]) freq[num] = 1;
//     else freq[num]++;
//     if (freq[num] > Math.ceil(arr.length / 2)) return num;
//   }
// };
// console.log(findMajority([2, 2, 1, 1, 2, 2, 4, 2]));
//finished at 3:35pm
// Using Boyer-Moore Algorithm

function majorityElement(arr) {
  //arr = [2, 2, 1, 1, 2, 2, 2]
  let candidate = null;
  //candidate = null;
  let count = 0;
  // count = 0
  for (let num of arr) {
    //for (let num of arr) , 1st iteration
    // 2nd iteration, num = 2
    // 3rd iteration, num = 1
    // 4th iteration, num = 1
    // 5th iteration, num = 2
    // 6th iteration, num = 2
    if (count === 0) {
      // if (count === 0)
      // if (count === 0)
      // if (1 === 0), false
      // if (2 === 0), false
      // if (1 === 0), false
      // if (0 == 0), true
      candidate = num;
      //  candidate = 2;
      // candidate = 2;
    }
    if (num === candidate) {
      //if (2 === 2), true
      // if (2 === 2), true
      // if (1 === 2), false
      // if (1 == 2), false
      // if (2 === 2), true
      count++;
      // count ++
      // count = 1;
      // count++;
      // count = 2;
      // count = 1;
      // count = 2;
    } else {
      count--;
      // count--;
      // count = 2 - 1;
      // count  = 1;
      // count--;
      // count = 0;
    }
  }

  return candidate;
}

console.log(majorityElement([2, 2, 1, 1, 2, 2, 2]));
// 2
