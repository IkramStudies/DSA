let num = 4562;

function reverseDigits(n) {
  // n = 4562
  let revNum = 0;
  // while (4562 > 0),
  // while (456 > 0),
  // while (45 > 0),
  // while (4 > 0)
  while (n > 0) {
    revNum = revNum * 10 + (n % 10);
    // revNum = 0 * 10 + (n % 10) = revNum = 0 + (4562 % 10 = 2)
    // revNum = 2 * 10 + (456 % 10) = 20 + 6 = 26
    // revNum = 26 * 10 + (45 % 10) = 260 + 5 = 265
    // revNum = 265 * 10 + (4 % 10) = 2650 + 4 = 2654
    n = Math.floor(n / 10);
    // n = Math.floor(4562/10) , n = 456;
    // n = Math.floor(456 / 10), n = 45;
    // n = Math.floor(45/ 10), n = 4
    // n = Math.floor(4 / 10), n = 0
  }
  return revNum;
}

// function call
console.log(reverseDigits(num));
