/*function convertToZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

console.log(convertToZeros([5, 100, 0, 2, 4, 5]));
*/

/*function convertToZeros(arr) {
    return new Array(arr.length).fill(0)
  }
  
  console.log(convertToZeros([5, 100, 0, 2, 4, 5]));
  */

function convertToZeros(arr) {
  return arr.map((arr) => 0);
}

console.log(convertToZeros([5, 100, 0]));
