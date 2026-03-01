const sumofsquares = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) sum += i ** 2;
  console.log(sum);
};

sumofsquares(2);
