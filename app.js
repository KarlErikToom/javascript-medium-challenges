/*function reverseString(str){
  return str.split('').reverse().join('')
}

console.log(reverseString('abc'))
*/
function reverseString(str) {
  let reversedString = "";
  for (let i = 0; i < str.length; i++) {
    reversedString = str[i] + reversedString;
  }
  return reversedString;
}

console.log(reverseString("abc"));
