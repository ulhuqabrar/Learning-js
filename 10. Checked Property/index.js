//  .checked -> Determines if the checked state of HTML checkbox or radio is checked or not

const checkbox = document.getElementById("checkbox");
const radio = document.getElementById("radio");
const visa = document.getElementById("visa");
const paypal = document.getElementById("paypal");
const submit = document.getElementById("submit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

submit.onclick = function() {

    if(checkbox.checked){
        subresult.textContent = 'You have checked';
    }
    else{
        subresult.textContent = 'You have NOT checked';
    }

    if(radio.checked){
        paymentresult.textContent = 'You have selected radio';
    }
    else if(visa.checked){
        paymentresult.textContent = 'You have checked visa';
    }
    else if(paypal.checked){
        paymentresult.textContent = 'You have checked paypal';
    }
    else{
        paymentresult.textContent = 'Select any of the above payment method!!!';
    }
}