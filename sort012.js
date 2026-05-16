const sort = (arr) => {
  let zeroCount = 0;
  let oneCount = 0;
  let twoCount = 0;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) zeroCount++;
    if (arr[i] == 1) oneCount++;
    if (arr[i] == 2) twoCount++;
  }
  for (let i = 0; i < zeroCount; i++) {
    arr[index] = 0;
    index++;
  }
  for (let j = 0; j < oneCount; j++) {
    arr[index] = 1;
    index++;
  }
  for (let k = 0; k < twoCount; k++) {
    arr[index] = 2;
    index++;
  }
  return arr;
};
let arr = [2, 0, 1, 2, 1, 0];
console.log(sort(arr));
