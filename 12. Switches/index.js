// switch = replacement of else if nest

let lunch = 3;

switch(lunch){
    case 1:
        console.log("I had pizza today");
        break;
    case 2:
        console.log("I had biryani today");
        break;
    case 3:
        console.log("I had shawarma today");
        break;       
    case 4:
        console.log("I had burger today");
        break;
    case 5:
        console.log("I had fries today");
        break;
    default:
        console.log(`I didn't have ${lunch}`);
}


let score = 52;
let grade;

switch(true){
    case score >= 90 :
        grade = "A";
        console.log(grade);
        break;
    case score >= 80:
        grade = "B";
        console.log(grade);
        break;
    case score >= 70:
        grade = "C";
        console.log(grade);
        break;
    case score >= 60:
        grade = "D";
        console.log(grade);
        break; 
    case score >= 50:
        grade = "E";
        console.log(grade);
        break; 
    default:
        console.log("You have failed the test");
}