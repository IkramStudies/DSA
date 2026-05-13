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
