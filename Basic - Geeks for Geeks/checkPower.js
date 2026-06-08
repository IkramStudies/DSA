const checkPower = (n, m) => {
  for (let i = 0; i < n; i++) {
    if (n ** i == m) return true;
  }
  return false;
};

console.log(checkPower(10, 1));
console.log(checkPower(10, 1000));
console.log(checkPower(10, 1001));
