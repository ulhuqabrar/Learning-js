/*
        function - Section of reuseable code.
                   Once declared, can be used when ever needed
                   we can all the function to execute that code
*/

// The information that needs to be filled later is given here
function Menu(restaurant, times){
    console.log("Pizza");
    console.log("Burger");
    console.log("Sandwich");
    console.log(`Shawarma is famous at ${restaurant}`);
    console.log(`Tacos were ordered ${times} times today`);
}

// The information is filled here respectively
Menu("Madara", 25);
Menu("Naruto", 5);

function add(x, y){
    return x + y;
}
function sub(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}

console.log(add(4, 6));
console.log(sub(8, 6));
console.log(multiply(4, 6));

// function to determine if a number is even or not

function iseven(number){
    /*
        if(number % 2 === 0){
           return true;
        }
        else{
          return false;
        }
    */
   //ternary operator
   return number % 2 === 0 ? true : false;
}

console.log(iseven(6))

function validemail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

console.log(validemail("madmanmadara@naruto.com"))
console.log(validemail("madmanmadaranaruto.com"))

// Practice

function naam(name){
    console.log(`Hello ${name}`);
}

naam("Madara");
naam("Naruto");

function add2(x, y){
    return x + y;
}   

console.log(add2(5, 6));

function max(a, b, c){
    if(a > b && a >c){
        return a;           
    }
    else if (b>a && b> c){
        return b;
        }
        else {
            return c;       
        }
}

console.log(max(5,8,12));


function
    is_even(nambar){
        if (nambar%2 === 0){
          return  console.log(`${nambar} is even`);
        }
        else {
          return console.log(`Given number ${nambar} is odd`)
        }
    }
    console.log(is_even(51))

function factorial(n){
    let result = 1;
    for(let i = 1; i<=n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5))