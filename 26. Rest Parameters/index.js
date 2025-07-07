/*
    rest parameters - blends variables, number of arguments by bundling them into array (Opposite of spreads)
                      Represented by - (...rest)

                      spread - expands array into sperate elements
                      rest - bundles seperate elements into an array
                      When there's no array, ... acts as a rest parameter but when there's an array ... acts as an rest parameter
*/


function anime(...characters){
    console.log(characters);
    // Here when we add ... it acts as spread because there is an array
    console.log(...characters);   
}

// Using rest parameter to stick all elements within an array
function animes(...characters){
    return characters;
}

const name1 = "Madara";
const name2 = "Naruto";
const name3 = "Minato";
const name4 = "Itachi";
const name5 = "Gaara";

anime(name1, name2, name3, name4, name5);

const characters = animes(name1, name2, name3, name4, name5);
console.log(characters);

function sum(...numbers){
    let result = 0;
    for(let number of numbers ){
        result += number;
    }
    return result;
}

const total = sum(1, 5, 7);

console.log(`Total sum is ${total}`)

function average(...numbers){
    let result = 0;
    for(let number of numbers ){
        result += number;
    }
    return result / numbers.length
}

const all = average(50, 60, 100, 20);
console.log(all);

// Combining strings

function combinestring(...strings){
    return strings.join(" ");
}

const fullname = combinestring("Mr.", "Uchiha", "Madara")

console.log(fullname);