const sort = (arr) => {
  let nextIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      [arr[i], arr[nextIndex]] = [arr[nextIndex], arr[i]];
      nextIndex++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      [arr[i], arr[nextIndex]] = [arr[nextIndex], arr[i]];
      nextIndex++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 2) {
      [arr[i], arr[nextIndex]] = [arr[nextIndex], arr[i]];
      nextIndex++;
    }
  }
  return arr;
};
let arr = [2, 0, 2, 1, 1, 0];
console.log(sort(arr));
