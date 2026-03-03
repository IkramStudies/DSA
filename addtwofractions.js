let addTwoFractions = (n, m) => {
  let output = [];
  let numerator = 0;
  let denominator = 0;
  //for (let i = 1; 1 < 2; i++)
  if (m[1] % n[1] == 0) {
    //if (15 % 5 == 0 )
    denominator = m[1]; // denominator = 15
  }
  //for (let i = 2; i < 15; i++)
  numerator = (denominator / n[1]) * n[0] + (denominator / m[1]) * +m[0];
  //  if (15 % 2 == 0)
  //  if (15 % 3 == 0) numerator = 1 * 3 + 3 * 3
  output = [numerator, denominator];
  for (let i = 2; i < 100; i++)
    if (output[0] % i == 0 && output[1] % i == 0) {
      output[0] /= i;
      output[1] /= i;
    }
  return output;
};
let a = [1, 5];
let b = [3, 15];
let c = [1, 3];
let d = [3, 9];
console.log(`Output =`, addTwoFractions(a, b));
console.log(`Output =`, addTwoFractions(c, d));
