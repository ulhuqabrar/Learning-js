/*
    array - variable that can hold more than one value
            represented by - []
*/

let course = ["Engineering", "Doctor", "Trader", "Lawyer"]

//elements given in [] are printed individully
console.log(course);
console.log(course[0]);

// We can also change elements in array

course[1] = "Investor";

console.log(course[1]);

// We can push element at the end of arry using

course.push("Banker")
console.log(course);

// We can pop element at the end of arry using

course.pop();
console.log(course);


// unshift adds element at the beginning of the array

course.unshift("Storyteller");
console.log(course);


// shift to remove element from the beginning of the array

course.shift();
console.log(course);

// To get length of the array

let lenOf = course.length;
console.log(lenOf);

// Search element within the array

let index = course.indexOf("Lawyer");
// If the element is not present in the array it will return to -1. (It is useful in if statements)
console.log(index);

// Loop for array
// Sorting an array

course.sort();
console.log(course);

// We use .reverse() to reverse sort the array

course.sort().reverse();

for(let i = 0; i < course.length; i++){
    console.log(course[i]);

}