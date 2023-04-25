function removeApples(arr) {
   let noApples = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "Apples") {
      noApples.push(arr[i])
    }
  }
  return noApples
}

console.log(removeApples(["Banana", "cucumba", "Apples"]));

/*
function removeApples(arr){
 return arr.filter(elem => elem  !=='Apples')
}

console.log(removeApples(['banana', 'Apples', 'Oranges']))*/
