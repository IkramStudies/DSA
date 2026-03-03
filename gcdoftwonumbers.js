const gcf = (n, m) => {
  let arr = [];
  let highest = 0;
  for (let i = 0; i < n; i++) if (n % i == 0 && m % i == 0) arr.push(i);
  for (let i = 0; i < n; i++) {
    if (arr[i + 1] > arr[i]) highest = arr[i + 1];
  }
  return highest;
};
console.log(gcf(36, 60));
