const maximumProduct = (arr) => {
  let prod = null;
  let maximumProd = arr[0];
  for (let i = 0; i < arr.length; i++) {
    prod = 1;
    for (let j = i; j < arr.length; j++) {
      prod *= arr[j];
      if (prod > maximumProd) maximumProd = prod;
    }
  }
  return maximumProd;
};

console.log(maximumProduct([2, 3, -2, 4]));
