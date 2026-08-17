const find = () => {
  let arr = [3, 5, 4, 1, 2];
  let sm = Math.min(...arr);
  let lg = Math.max(...arr);
  console.log(`Max is ${lg} and min is ${sm}`);
};
find();
