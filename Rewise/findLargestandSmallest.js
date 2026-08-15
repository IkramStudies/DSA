const find = () => {
  let arr = [3, 5, 1, 2, 4];
  let sm = +Infinity;
  let lg = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < sm) sm = arr[i];
    if (arr[i] > lg) lg = arr[i];
  }
  console.log("Max is", +lg, "Smallest is", +sm);
};
find();
