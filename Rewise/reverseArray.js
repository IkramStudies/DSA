const reverseArr = () => {
  let arr = [1, 2, 3, 4, 5];
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) newArr = [...newArr, arr[i]];
  return newArr;
};
console.log(reverseArr());
