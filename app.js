function convertToZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr
}

console.log(convertToZeros([5, 100, 0]));
