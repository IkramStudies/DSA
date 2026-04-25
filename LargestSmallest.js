const largestSmallest = (arr) => {
  let smallest = Infinity;
  let largest = -Infinity;
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
    // if (arr[0] > -Infinity) largest = arr[0]
    // if (1 > -Infinity) largest = 1
    if (arr[i] < smallest) smallest = arr[i];
    // if (arr[0] < Infinity) smallest = arr[0];
    // if (1 < Infinity) smallest = 1;
  }
  obj.smallestnumber = smallest;
  obj.largestnumber = largest;
  return obj;
};
let arr = [1, 2, 3, 4, 5];
console.log(largestSmallest(arr));
