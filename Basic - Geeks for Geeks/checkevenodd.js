const checkEven = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return console.log(`${num} is even`);
  }
  console.log(`${num} is odd`);
};
checkEven(3);
checkEven(4);
