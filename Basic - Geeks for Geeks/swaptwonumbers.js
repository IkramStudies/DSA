const swaptwonums = (a, b) => {
  [b, a] = [a, b];
  console.log(`Nums are ${a} , ${b}`);
};
swaptwonums(1, 2);
