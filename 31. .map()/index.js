/*
   .map() - accepts callback & applies that function to each
            element of an array, then returns a new array

            similar to forEach() as it returns the desired numbers
            but we still retain our original array
*/                                                      
 
const numbers = [1, 2, 3, 4,5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(cubes);

function square(element){
    return Math.pow(element, 2)
}

function cube(element){
    return Math.pow(element, 3)
}

const students = ["spongebob", "patrick", "Squidward", "Sandy"]
const ups = students.map(upps);
const low = students.map(lows);

console.log(ups)
console.log(low);

function upps(element) {
    return element.toUpperCase();
} 

function lows(element) {
    return element.toLowerCase();
} 

const dates = ["2025-07-10", "2022-09-12", "2001-12-09"]

const neatdates = dates.map(neatdate)

console.log(neatdates)

function neatdate(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}