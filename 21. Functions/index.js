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
    console.log(`Ramen is famous at ${restaurant}`);
    console.log(`Tacos were ordered ${times} times today`);
}

// The information is filled here respectively
Menu("Ichiraku", 25);
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

console.log(validemail("madmanmadaranaruto.com"))
console.log(validemail("madmanmadara@naruto.com"))