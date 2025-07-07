// while loop = repeats some code while certain conditions are true

let name = "";

while(name == "" || name == null){
    name = window.prompt(`Enter Your Name`);
}

console.log(`Hello ${name}`); 


// while loop has it's own set of problems like when the variable is not assigned, so we will use some thing like 
// do while loop to solve this issue

let secondname;
do{
    secondname = window.prompt(`Enter your secondname`);
}while(secondname == "" || secondname == null){
    secondname = window.prompt(`Enter Your Secondname`);
}

console.log(`Hello ${secondname}`);

// TASK

let loggedin = false;
let Username;
let password;

while(!loggedin){
    Username = window.prompt("Enter Username");
    password = window.prompt("Enter Password");

    if (Username === "uchihamadara" && password === "clan"){
        loggedin = true;
    }
    else{
        window.log("Enter valid credentials");
    }
}

console.log(`Namaste ${Username}`);

console.log(`Your name is ${name} ${secondname}
And your username is ${Username}`)