const nthTerm = (a1, a2, n) => {
  let nth = a1; // an = a + (n-1)* d,
  d = a2 - a1;
  for (let i = 1; i < n; i++) nth += d;
  return nth;
};

console.log(nthTerm(2, 3, 4));
