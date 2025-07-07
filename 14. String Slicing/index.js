// Process of creating string within a string
// string.slice(start, end)

const fulname = "Any Name";
// ending index is exlusive so it is not included
let firstname  = fulname.slice(0, 2);
let lastname = fulname.slice(4, 8);

let firstchar = fulname.slice(0, 1);

// using -ve characters to slice can slice from the end of the string
let lastchar = fulname.slice(-1);

console.log(firstname);
console.log(lastname);
console.log(firstchar);
console.log(lastchar);

// For when there's unknow number of string characters and want to select the first word

let firstName = fulname.slice(0, fulname.indexOf(" "));
// To print word after first space we use + 1
let lastName = fulname.slice(fulname.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

// EXERSICE - Obtain user name from email

let email = "madarauchiha@naruto.com";
let username =  email.slice(0, email.indexOf("@"));

console.log(username)