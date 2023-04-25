function converToBoolean(arr){
  return arr.map(elem => !!elem)
}

console.log(converToBoolean([500, 0, "karl", "", []]))