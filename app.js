/*function filterOutFalsy(num1, num2){
if (num1 == false){
   return num1
}
else {
   return num2
}
}

console.log(filterOutFalsy("", 10 ))
*/

function filterOutFalsy(num1, num2){
   return num1 == false ?  num1 : num2
   }
   console.log(filterOutFalsy(0, 5))