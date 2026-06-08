const duplicates = (arr) => {
  let freq = {};
  let newArr = [];
  for (let num of arr) {
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
    if (freq[num] === 2) newArr.push(num);
  }
  return newArr;
};
let arr = [1, 2, 3, 1, 3, 6, 6, 3];
console.log(duplicates(arr));
