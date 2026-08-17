const count = () => {
  let arr = [1, 2, 5, 3, 4, 5, 2, 3, 6];
  let currentEle = 0;
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    currentEle = arr[i];
    if (!freq[currentEle]) freq[currentEle] = 1;
    else freq[currentEle] += 1;
  }
  return freq;
};
console.log(count());
