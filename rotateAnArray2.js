const rotate = (arr, k) => {
  let n = arr.length;
  let n1 = n - k;
  // originally there was n1 = k % n;
  // n1 = 5 - 2;
  // n1 = 3;
  return arr.slice(n1).concat(arr.slice(0, n1));
  // return arr.slice(3).concat(arr.slice(0, 3));
};

let arr = [1, 2, 3, 4, 5];
console.log(rotate(arr, 2));
