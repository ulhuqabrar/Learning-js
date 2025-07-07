//Const = Constants that can't be changed
// Can be used to  numbers & booleans; strings doesn't apply

const pi = 3.14159;
let radius;
let circumference;



radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2* pi* radius;
console.log(circumference);