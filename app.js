function removeApples(arr) {
  let noApples = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== "Apples") {
      noApples.push(arr[i])
    }
  }
  return noApples
  
}

console.log(removeApples(["Banana", "Oranges", "Apples"]));
