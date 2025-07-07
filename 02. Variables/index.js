/* 
   Variables can be given with the help of

   1. Declaration    ex: let x;
   2. Assignment     ex: x = 100;
*/

let q;
//let x;  - variable names should be unique
//Once a variable is declared we can directly use it
q = 100;

console.log(q) //shows op in console of inspect

//To declare and assign in one line
let r = 69;
console.log(r)

/*
  Data Types:
    numbers
    strings
    boolean
*/

//variables

let a = 55
let b = 50.99

console.log(typeof b); //konse type ka variable mlm krne use hota
console.log(`Hani ${a} logon se dalaliye`);
console.log(`Hani Ka rate ${b}, bhot saste party hamare`);

//strings

let c = "dhilla"
let d = "hani123@gmail.com"

console.log(typeof c);
console.log(`Hani ka ${c} ho gaya`);
console.log(`Hani ka email ${d}`);

//Boolean

let e = true;
let f = false;

console.log(typeof e);
console.log(`I have internet connection - ${f}`);
console.log(`Hani has internet connection - ${e}`);


//Using js to print on webpage

let g = "Pehle html me tag ku id dena Fir ake yhn id ku doc and get by element likhna To web page me display hota kate";
let h = 64;
let i = true;

document.getElementById("p1").textContent = g;
document.getElementById("p2").textContent = `${h} lines likhe apan`;
document.getElementById("p3").textContent = `Print hora likhre so - ${i}`


// type conversions = Changes from one datatype of a value to another
//        (strings; numbers; booleans)

let aga = window.prompt("How old are you?")

aga+=1;

console.log(aga, typeof aga);

//Here output just keeps 1 beside the entered number in console are the age variable
//here is string we convert age string to number in below code

let age = window.prompt("How old are you?")

age = Number(age); //This line converts string to number variable
age+=1;

console.log(age, typeof age);

let x="69";
let y="pizza";
let z="";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);