const rainWater = (arr) => {
  let res = 0;
  for (let i = 1; i < arr.length; i++) {
    let left = arr[i];
    for (let j = 0; j < i; j++) {
      left = Math.max(left, arr[j]);
    }
    let right = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      right = Math.max(right, arr[j]);
    }
    res += Math.min(left, right) - arr[i];
  }
  return res;
};
let arr = [2, 1, 5, 3, 1, 0, 4];
console.log(rainWater(arr));
let arr1 = new Array(6);
console.log(arr1);
