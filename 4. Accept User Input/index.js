//Easy way - window prompt
//professional way - HTML textbox
/*
 Easy Way

 let studentid;
 studentid = window.prompt("Enter studentid")

 console.log(studentid);
*/

//Professional Way

let studentId;

document.getElementById("mysubmit").onclick= function(){
    studentId = document.getElementById ("text").value;
    console.log(studentId);
}