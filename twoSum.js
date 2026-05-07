/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

/*
let newArr = [];
for (let i = 0; i < arr.length - 1; i++)
{
  for (let j = 1; j < arr.length; i++)
  {
    if (arr[i] + arr[j] == target)
    {
      newArr.push(i);
      newArr.push(j);
    }
  }
}
  return newArr;
*/
const findIndex = (arr, target) => {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        newArr.push(i);
        newArr.push(j);
      }
    }
  }
  return newArr;
};

console.log(findIndex([1, 2, 4, 8], 9));
