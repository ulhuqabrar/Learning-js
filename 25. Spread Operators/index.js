/*
    spread operators = Allows iterable such as array/string to expand(Unpacks the elements)
                       Represented - ...
*/

let numbers = [1, 2, 3, 5, 4, 8, 7, 9];
let maximum = Math.max(...numbers);

console.log(maximum);

let username = "Madara Uchiha";
// .join - helps in joining the elements to the individual elements
let letters = [...username].join("-");

console.log(letters);

// Shallow copy - Different data structure with identical values


let course = ["Engineering", "Doctor", "Trader", "Lawyer"];
// Addin multiple arrays
let mentors = ["Tesla", "Livermore", "Jobs", "Hoffman"];
let newcourse = [...course, ...mentors]

console.log(course);
console.log(newcourse);