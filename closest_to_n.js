const closestton = (n, m) => {
  let n1 = n - m; // n1 = 13 -4 = 9
  let n2 = n + m; // n2 = 13 + 4 = 17
  let closestdec = 0;
  let closestinc = 0;
  for (let i = n; i > n1; n1++) {
    // i = 13; i > 9; n1++
    // let num = 13 - 4
    if (n1 % m == 0) closestdec = n1;
    //if (9 % 4 == 0)
    // n1++
    // n1 = 10
    // if (n1 % m == 0),
    // if (10 % 4 == 0)
    // if (11 % 4 == 0 )
    // if (12 % 4 == 0), true
  }
  for (let j = n; j < n2; n2--) {
    if (n2 % m == 0) closestinc = n2;
  }
  if (n - closestdec < closestinc - n) {
    return closestdec;
  } else {
    return closestinc;
  }
};

console.log(closestton(31, 4));
