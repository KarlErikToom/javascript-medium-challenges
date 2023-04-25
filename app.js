/*function convertToZeros(arr) {
  for (let i = 0; i < arr.length; i++){
   arr[i] = 0
  }
  return arr
}

console.log(convertToZeros([5, 100, 0, 4, "fog"]));
*/

function convertToZeros(arr){
 let newArr = arr.map(elem => 0)
 return newArr
}


console.log(convertToZeros([1,2,3,4]))
