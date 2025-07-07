/*
       = assignment operator
      == comparision operator
     === Strict equality operator (Compare if values & datatypes are equal)
      != Inequality operator
     !== Strict inequality operator (Compare if values & datatypes are not equal)
*/

// Example of how === works

const pi = 3.14

if (pi === "3.14"){
    console.log("It is a PI")
}
// We'll get else statement as the pi is number and not string and it declines the if statement
else{
    console.log("It is not a Pi");
}

if (pi != "3.14"){
    console.log("It is not a Pi")
}
// Opposite of comparision operator with != we say if not equal to
else{
    console.log("It is a pi")
}