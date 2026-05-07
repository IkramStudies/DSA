/*
Input:
[1, 2, 2, 3, 1, 2]
Output:
{
  1: 2,
  2: 3,
  3: 1
}
*/
/*


/*
let freq = {}
for (let i = 0; i < arr.length; i++)
{
  if (freq[arr[i]])
    freq[arr[i]]++;
  else 
    freq[arr[i]] = 1;
}
return freq;
*/
const countFrequency = (arr) => {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) freq[arr[i]]++;
    else freq[arr[i]] = 1;
  }
  return freq;
};
let arr = [1, 2, 3, 3, 4, 5, 5];
console.log(countFrequency(arr));
