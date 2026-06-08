const rearrange = (arr) => {
  let newArr = [];
  let left = 0;
  let right = arr.length - 1;
  let flag = true;
  while (left <= right) {
    flag ? newArr.push(arr[right--]) : newArr.push(arr[left++]);
    flag = !flag;
  }
  return newArr;
};

let arr = [1, 2, 3, 4, 5, 6];
console.log(rearrange(arr));
