/*function reverseString(str) {
  let reversedString = "";
  for (i = 0; i < str.length; i++) {
    reversedString = str[i] + reversedString;
  }
  return reversedString;
}

console.log(reverseString("Karl"));
*/

function reverseString(str){
 return str.split('').reverse().join('')
}


console.log(reverseString('Karl'))