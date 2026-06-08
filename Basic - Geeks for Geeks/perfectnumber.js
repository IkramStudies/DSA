let perfectNumber = (num) => {
  let result = [];
  let sum = 0;
  for (let i = 1; i < num; i++) if (num % i == 0) result.push(i);
  for (let i = 0; i < result.length; i++) sum += result[i];
  if (sum == num) return true;
  return false;
};
console.log(perfectNumber(6));
console.log(perfectNumber(15));
