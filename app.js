function filterOutFalsy(arr){
 return arr.filter(elem => elem != false)
}

console.log(filterOutFalsy(['tomato', 'orange', true, false, 0]))

/*function filterOutFalsy(arr) {
  let noFalse = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != false) {
      noFalse.push(arr[i]);
    }
  }
  return noFalse;
}

console.log(filterOutFalsy(["tomato", "orange", true, false, 0]));
*/