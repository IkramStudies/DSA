function nthTermOfAP(a1, a2, n) {
  let nthTerm = a1; // nthTerm = 2
  let d = a2 - a1; // d = a2 - a1 = 3 - 2 = 1
  for (let i = 1; i < n; i++) {
    // nthTerm += d , nthTerm = nthTerm + d
    nthTerm += d; // nthTerm = nthTerm + d , nthTerm =
  }
  return nthTerm;
}

let a1 = 2,
  a2 = 3;
let n = 4;
console.log(nthTermOfAP(a1, a2, n));
// nthTerm = 2
// an = a + (n - 1)* d
// d = 3 - 2 = 1
// for (let i = 1; i < 4; i++)
// nthTerm += d;
// nthTerm = nthTerm + d;
// nthTerm = 2 + 1
// nthTerm = 3
// for (let i = 2; 2 < 4; i++)
// nthTerm += d
// nthTerm = nthTerm + d
// nthTerm = 3 + 1;
// nthTerm = 4
// i++;
// i = 3 , 3 < 4
// nthTerm += d
// nthTerm += d
// nthTerm = nthTerm + d
// nthTerm = 4 + 1
// nthTerm = 5
// i++;
// i = 4 , 4 < 4, false
// nthTerm = 5
