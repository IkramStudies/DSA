const givenSum = (arr) => {
  let res = 0;
  for (let i = 1; i < arr.length; i++) {
    let initial = arr[i];
    let right = arr[j];
    let left = arr[j];
    for (let j = i + 1; j < arr.length; j++) {
      right = Math.max(initial, right);
    }
    for (let j = 0; j < i; j++) {
      left = Math.max(initial, left);
    }
    res += Math.min(left, right) - arr[i];
  }
  return res;
};
