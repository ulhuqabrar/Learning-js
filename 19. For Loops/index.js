// for loops - repeat some code a LIMITED amount of times


for(let i = 0; i <= 10; i+=2){
    console.log("Hello");
    if(i == 2){
        // continue is used to skip an iteration
        continue;
    }
    else if(i == 6){
        // break is used to stop the iteration
        break;
    }
    console.log(i);
}