// Method Chaining - Used to call one method after another in one continuous line of code

let username = window.prompt("Enter username");

// ------- NO METHOD CHAINING -------

/*
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let others = username.slice(1);
others = others.toLowerCase();
username = letter + others;

console.log(username);
*/

// ------- METHOD CHAINING -------

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);