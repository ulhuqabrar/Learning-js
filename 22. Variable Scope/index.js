/*
    variable scope - where variable is recognized and accessible (local vs global)

    Any function that is declared inside a function is local
    funtions can't see inside of other functions.
    Anything mentioned outside function is global variable, and functions can access them
    When the global variable is declared again in function the weightage is given to the local variable
*/

let p = 20;

function1()
function2()

function function1(){
    let x = 2;
    let p = 12;
    console.log(x);
    console.log(p);
}

function function2(){
    let y = 1;
    console.log(p);
    console.log(x);
}
