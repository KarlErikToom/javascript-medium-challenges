function getMax(arr) {
   let max = arr[0]
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

console.log(getMax([5, 2, 50,2 ,52, 12]));
