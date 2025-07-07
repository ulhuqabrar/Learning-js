const button = document.getElementById("button");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;

let RandNum1;
let RandNum2;
let RandNum3;

button.onclick = function() {
    RandNum1 = Math.floor(Math.random() * max) + min;
    label1.textContent = RandNum1;
    RandNum2 = Math.floor(Math.random() * max) + min;
    label2.textContent = RandNum2;
    RandNum3 = Math.floor(Math.random() * max) + min;
    label3.textContent = RandNum3;
}