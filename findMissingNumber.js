/*
Input:
[2, 3, 1, 5]
Output:
4
for (let i = 0; i < arr.length; i++)
{
  if (!arr[i].includes(i + 1))
    return i + 1;
}
*/
const findMissingNum = (arr) => {
  for (let i = 0; i < arr.length; i++) if (!arr.includes(i + 1)) return i + 1;
};

let arr = [2, 3, 4, 5];
findMissingNum(arr);
