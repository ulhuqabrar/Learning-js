let randomNum = Math.floor(Math.random() * 10) + 1;
// add * and number beside so the random number is between 0 and that number
// Add + 1 between ) and ; to get random Natural number
// We can give lower limit by stating + and minimum number 
// To get whole number use floor or ceil property
console.log(randomNum);

// Writing random number generation in a range 

const min = 69;
const max = 420;

let newNum = Math.floor(Math.random() * (min - max) + max);
console.log(newNum);