const sumofdigits = (n) => {
  let sum = 0;
  n = n.toString();
  for (let char of n) sum += parseInt(char);
  return sum;
};
console.log(sumofdigits(999));

// n = 123, 1 + 2 + 3 = 6
