function filterOutFalsy(arr) {
  let truthyArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!!arr[i] === true) {
      truthyArr.push(arr[i]);
    }
  }
  return truthyArr;
}

console.log(filterOutFalsy(["", true, 'hello', null, undefined, "0"]));

/*function filterOutFalsy(arr){
return arr.filter(elem => !!elem === true)
}


console.log(filterOutFalsy(["", true, 'hello', null, undefined, "0"]))*/
