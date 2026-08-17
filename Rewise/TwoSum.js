const twoSum = () => {
  let arr = [1, 6, 2, 8];
  let target = 7;
  let indice = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        indice.push(i);
        indice.push(j);
      }
    }
  }
  return indice;
};
console.log(twoSum());
