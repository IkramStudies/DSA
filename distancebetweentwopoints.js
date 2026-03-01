const distance = (x1, y1, x2, y2) => {
  let result = (x2 - x1) ** 2 + (y2 - y1) ** 2;
  result = Math.sqrt(result);
  return result;
};
console.log(distance(3, 4, 7, 7));
