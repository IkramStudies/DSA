const remove = () => {
  let arr = [3, 4, 4, 5, 5, 1, 2, 2, 1];
  let newArr = [...new Set(arr)];
  console.log(newArr);
};
remove();
