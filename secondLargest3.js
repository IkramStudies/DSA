const secondLargest = (arr) => {
  let largest = -Infinity;
  // largest = -Infinity;
  let second = 0;
  //second = 0;
  for (let i = 0; i < arr.length; i++) {
    // i = 0; 0 < 5
    // i++;
    // i = 1; 1 < 5
    if (arr[i] > largest) {
      // if (arr[1] > 1)
      // if (arr)
      //if (arr[0] > -Infinity)
      // if (1 > -Infinity) , true
      // if (arr[1] > largest)
      // if (2 > 1), true
      second = largest;
      // second = -Infinity
      // second = 1;
      largest = arr[i];
      // largest = 1
      // largest = 2
    } else if (arr[i] > second && arr[i] != largest) second = arr[i];
    //
  }
  return second;
};
let arr = [1, 2, 3, 4, 5];
console.log(secondLargest(arr));
/*
  let largest = -Infinity;
  let second = 0;
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] > largest)
    {
      second = largest;
      largest = arr[i];
    }
    else if (second > arr[i] && second != largest )
      second = arr[i]; 
  }
}

*/
