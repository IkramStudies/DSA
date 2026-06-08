const maximumProd = (arr) => {
  let pre = 1;
  let suf = 1;
  let maximumProd = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (pre == 0) pre = 1;
    if (suf == 0) suf = 1;
    pre *= arr[i];
    suf *= arr[arr.length - 1 - i];
    maximumProd = Math.max(pre, suf, maximumProd);
  }
  return maximumProd;
};
let arr = [-2, 6, -3, -10, 0, 2];
console.log(maximumProd(arr));
