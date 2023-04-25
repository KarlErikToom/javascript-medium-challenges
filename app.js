function calcTime(seconds) {
   let smallNumber = '0'
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;
  if (timerMinutes.toString().length ===1){
   timerMinutes = smallNumber + timerMinutes

  }
  if (timerSeconds.toString().length === 1){
   timerSeconds = smallNumber + timerSeconds
  }

  return timerMinutes + ":" + timerSeconds;
}

console.log(calcTime(66));
