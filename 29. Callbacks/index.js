/*
    Callback = Function passed as an arguement to another function

    Used to handle asynchronous operations:
      1. Reading a file
      2. Network Requests
      3. Interacting with databases
    
    When something takes more time to complete, compiler automatically sontinues with the code, 
    we use callbacks then to say that it needs to be called back now
*/
hello(goodbye);


function hello(callback){
    console.log("Hello");
    callback();
}

function goodbye(){
    console.log("Goodbye");
}

function left(){
    console.log("Left")
}

sum(displaypage, 2, 6)

function sum(callback, x, y){
    let result = x+y;
    callback(result);
}

function displayconsole(result){
    console.log(result);
}


function displaypage(result){
    document.getElementById("myH1").textContent = result;
}