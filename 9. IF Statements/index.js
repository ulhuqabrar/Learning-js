// if condition true - proceed, else - do something else

let age = 9;

if(age > 18){
    console.log("You are big enough to stay alone");
}

else{
    console.log("You are too young");
}

let isStudent = false;
if(isStudent){
    console.log("You are a student");
}
else{
    console.log("You are a misfit");
}

//nested if else

let umr =  55;
let lisence = true;
let pesa = false;

if (umr >= 18) {
    console.log("You are eligible to have lisence");
    if (lisence){
        console.log("You can go!!");
    }
    else if(pesa) {
        console.log("Paise do or jao");
    }
    else{
        console.log("Challan Katega");
    }
}
else{
    console.log("Gadi Chhod Jaa");
}
