const secondlg = () => {
  let arr = [1, 6, 4, 5, 2, 3];
  let lg = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > lg) {
      second = lg;
      lg = arr[i];
    } else if (arr[i] > second && arr[i] != lg) second = arr[i];
  }
  return second;
};
console.log(secondlg());
