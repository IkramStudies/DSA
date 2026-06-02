const findMajority = (arr) => {
  let candidate = null;
  let count = 0;
  for (let num of arr) {
    if (count == 0) candidate = num;
    if (num == candidate) count++;
    else count--;
  }
  return candidate;
};

console.log(findMajority([1, 2, 1, 2, 2, 1]));
