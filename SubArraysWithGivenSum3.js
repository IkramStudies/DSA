const subArray = (arr, target) => {
  let left = 0;
  let sum = 0;
  let newArr = [];
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum > target && left < right) {
      sum -= arr[left];
      left++;
    }
    if (sum == target) newArr.push(arr.slice(left, right + 1));
  }
  return newArr;
};

let arr = [1, 2, 3, 4, 5];
let target = 5;
console.log(subArray(arr, target));
