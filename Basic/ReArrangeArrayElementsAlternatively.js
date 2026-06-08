let reArrange = (arr) => {
  let newArr = [];
  let left = 0;
  let right = arr.length - 1;
  if (arr.length % 2 === 0) {
    while (left < right) {
      newArr.push(arr[right--]);
      newArr.push(arr[left++]);
    }
    return newArr;
  } else {
    console.log("Array should have even number of elements");
  }
};
let arr = [1, 2, 3, 4, 5, 6];
console.log(reArrange(arr));
