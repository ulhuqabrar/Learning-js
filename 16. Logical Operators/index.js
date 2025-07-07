/*
    Logical Operators - Used to combine ormanipulate boolean values
    Are of 3 types :  AND = && - Both conditions should be true
                      OR  = || - Either conditions should be true
                      NOT = !  - Invererts the whatever condition

*/

const food = 1200;
const sugar = 20;
const ate = false;

if(!ate){
    console.log("He didn't eat the FOOD");
}
else{
    console.log("He ate the FOOD");
}

if (food <= 1500 && food >= 1000){
    console.log("You are eating suffient calorie");
}
else{
    console.log("You will get not healthy");
}

if(sugar >= 21 || sugar <= 15){
    console.log("Your body sugar is imbalance");
}
else{
    console.log("You are having Healthy amount of sugar")
}