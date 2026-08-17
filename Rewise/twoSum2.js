const twoSum = () => {
  let arr = [1, 2, 6, 8];
  let target = 7;
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let previousNumber = target - arr[i];
    //current number + previous number = target
    if (map[previousNumber] !== undefined) return [map[previousNumber], i];
    map[arr[i]] = i;
  }
};
console.log(twoSum());
