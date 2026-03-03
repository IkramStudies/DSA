const pairCubeCount = (n) => {
  let result = [];
  for (let i = 1; i < n; i++)
    for (let j = 2; j < n; j++) {
      if (i ** 3 + j ** 3 === n) {
        result = [i, j];
        return result;
      }
    }
  return false;
};

console.log(pairCubeCount(9));
console.log(pairCubeCount(28));
