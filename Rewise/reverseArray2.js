const reverseArr = () => {
  let arr = [5, 4, 3, 2, 1];
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) newArr.push(arr[i]);
  return newArr;
};
console.log(reverseArr());
