const text = document.getElementById("text");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

let age;

submit.onclick = function() {

    age = mytext.value;
    age = Number();
    if(age >= 100) {
        result.textContent = 'Too old to drive';
    }
    else if (age >= 18) {
        result.textContent = 'You are eligible to drive';
    }
    else if (age < 0) {
        result.textContent = 'Born first';
    }
    else{
        result.textContent = 'Must be 18+ to enter the site';
    }
}