const findDuplicates = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let index = Math.abs(arr[i]);
    if (arr[index] < 0) {
      result.push(index);
    } else {
      arr[index] = -arr[index];
    }
  }

  return result;
};

let arr = [4, 1, 4, 3, 3];

console.log(findDuplicates(arr));
